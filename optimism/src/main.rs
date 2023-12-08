use kimchi_optimism::{
    cannon::{self, Meta, Start, State},
    cannon_cli,
    mips::witness,
    preimage_oracle::PreImageOracle,
};
use log::debug;
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Arc;
use std::{fs::File, io::BufReader, process::ExitCode};

pub fn main() -> ExitCode {
    env_logger::Builder::from_env(env_logger::Env::default().default_filter_or("info")).init();

    let cli = cannon_cli::main_cli();

    let configuration = cannon_cli::read_configuration(&cli.get_matches());

    let file =
        File::open(&configuration.input_state_file).expect("Error opening input state file ");

    let reader = BufReader::new(file);
    // Read the JSON contents of the file as an instance of `State`.
    let state: State = serde_json::from_reader(reader).expect("Error reading input state file");

    let meta_file = File::open(&configuration.metadata_file).unwrap_or_else(|_| {
        panic!(
            "Could not open metadata file {}",
            &configuration.metadata_file
        )
    });

    let meta: Meta = serde_json::from_reader(BufReader::new(meta_file)).unwrap_or_else(|_| {
        panic!(
            "Error deserializing metadata file {}",
            &configuration.metadata_file
        )
    });

    let mut po = PreImageOracle::create(&configuration.host);
    let mut child = po.start();

    // Initialize some data used for statistical computations
    let start = Start::create(state.step as usize);

    // Install signal catcher
    let term = Arc::new(AtomicBool::new(false));
    signal_hook::flag::register(signal_hook::consts::SIGTERM, Arc::clone(&term)).unwrap();

    let mut env = witness::Env::<ark_bn254::Fq>::create(cannon::PAGE_SIZE as usize, state, po);

    while !term.load(Ordering::Relaxed) && !env.halt {
        env.step(&configuration, &meta, &start);
    }

    debug!("Killing child with id {}", child.id());
    let _ = child.kill();

    if !env.halt {
        // TODO: Logic
        ExitCode::FAILURE
    } else {
        // Consider that reaching env.halt = true is a successful run
        ExitCode::SUCCESS
    }
}
