use kimchi_optimism::{
    cannon::{self, Meta, Start, State},
    cannon_cli,
    mips::witness,
    preimage_oracle::PreImageOracle,
};
use std::{fs::File, io::BufReader, process::ExitCode};

use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Arc;

pub fn main() -> ExitCode {
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

    env_logger::Builder::from_env(env_logger::Env::default().default_filter_or("info")).init();

    // Install signal catcher
    let term = Arc::new(AtomicBool::new(false));
    signal_hook::flag::register(signal_hook::consts::SIGTERM, Arc::clone(&term)).unwrap();

    let mut env = witness::Env::<ark_bn254::Fq>::create(cannon::PAGE_SIZE as usize, state, po);

    std::thread::sleep(std::time::Duration::from_secs(5));

    while !term.load(Ordering::Relaxed) && !env.halt {
        env.step(&configuration, &meta, &start);
    }

    if !env.halt {
        // When we're here, we have received a SIGINT
        let _ = child.kill();
        // TODO: Logic
        ExitCode::FAILURE
    } else {
        // Consider that reaching env.halt = true is a successful run
        ExitCode::SUCCESS
    }
}
