use crate::cannon::{
    Hint, HostProgram, Preimage, HINT_CLIENT_READ_FD, HINT_CLIENT_WRITE_FD,
    PREIMAGE_CLIENT_READ_FD, PREIMAGE_CLIENT_WRITE_FD,
};
use command_fds::{CommandFdExt, FdMapping};
use log::debug;
use os_pipe::{PipeReader, PipeWriter};
use std::io::{Read, Write};
use std::os::fd::AsRawFd;
use std::process::{Child, Command};

pub struct PreImageOracle {
    pub cmd: Command,
    pub oracle_client: RW,
    pub oracle_server: RW,
    pub hint_client: RW,
    pub hint_server: RW,
}

pub struct ReadWrite<R, W> {
    pub reader: R,
    pub writer: W,
}

pub struct RW(pub ReadWrite<PipeReader, PipeWriter>);

// Create bidirectional channel between A and B
//
// Schematically we create 2 unidirectional pipes and creates 2 structures made
// by taking the writer from one and the reader from the other.
//
//     A                     B
//     |     ar  <---- bw    |
//     |     aw  ----> br    |
//
pub fn create_bidirectional_channel() -> Option<(RW, RW)> {
    let (ar, bw) = os_pipe::pipe().ok()?;
    let (br, aw) = os_pipe::pipe().ok()?;
    Some((
        RW(ReadWrite {
            reader: ar,
            writer: aw,
        }),
        RW(ReadWrite {
            reader: br,
            writer: bw,
        }),
    ))
}

impl PreImageOracle {
    pub fn create(hp_opt: &Option<HostProgram>) -> PreImageOracle {
        let host_program = hp_opt.as_ref().expect("No host program given");

        let mut cmd = Command::new(&host_program.name);
        cmd.args(&host_program.arguments);

        let (oracle_client, oracle_server) =
            create_bidirectional_channel().expect("Could not create bidirectional oracle channel");
        let (hint_client, hint_server) =
            create_bidirectional_channel().expect("Could not create bidirectional hint channel");

        // file descriptors 0, 1, 2 respectively correspond to the inherited stdin,
        // stdout, stderr.
        // We need to map 3, 4, 5, 6 in the child process
        cmd.fd_mappings(vec![
            FdMapping {
                parent_fd: hint_server.0.writer.as_raw_fd(),
                child_fd: HINT_CLIENT_WRITE_FD,
            },
            FdMapping {
                parent_fd: hint_server.0.reader.as_raw_fd(),
                child_fd: HINT_CLIENT_READ_FD,
            },
            FdMapping {
                parent_fd: oracle_server.0.writer.as_raw_fd(),
                child_fd: PREIMAGE_CLIENT_WRITE_FD,
            },
            FdMapping {
                parent_fd: oracle_server.0.reader.as_raw_fd(),
                child_fd: PREIMAGE_CLIENT_READ_FD,
            },
        ])
        .unwrap_or_else(|_| panic!("Could not map file descriptors to preimage server process"));

        PreImageOracle {
            cmd,
            oracle_client,
            oracle_server,
            hint_client,
            hint_server,
        }
    }

    pub fn start(&mut self) -> Child {
        // Spawning inherits the current process's stdin/stdout/stderr descriptors
        self.cmd
            .spawn()
            .expect("Could not spawn pre-image oracle process")
    }

    // The preimage protocol goes as follows
    // 1. Ask for data through a key
    // 2. Get the answers in the following format
    //      +------------+--------------------+
    //      | length <8> | pre-image <length> |
    //      +---------------------------------+
    //   a. a 64-bit integer indicating the length of the actual data
    //   b. the preimage data, with a size of <length> bits
    pub fn get_preimage(&mut self, key: [u8; 32]) -> Preimage {
        let RW(ReadWrite { reader, writer }) = &mut self.oracle_client;

        let r = writer.write(&key);
        assert!(r.is_ok());
        // We check that 32 bytes have been written
        assert_eq!(r.unwrap(), 32);

        debug!("Reading response");
        let mut buf = [0_u8; 8];
        let resp = reader.read_exact(&mut buf);
        assert!(resp.is_ok());

        debug!("Extracting contents");
        let length = u64::from_be_bytes(buf);
        let mut handle = reader.take(length);
        let mut preimage = vec![0_u8; length as usize];
        let resp = handle.read(&mut preimage);

        assert!(resp.is_ok());

        debug!(
            "Got preimage of length {}\n {}",
            preimage.len(),
            hex::encode(&preimage)
        );
        // We should have read exactly <length> bytes
        assert_eq!(preimage.len(), length as usize);

        Preimage::create(preimage)
    }

    // The hint protocol goes as follows:
    // 1. Write a hint request with the following byte-stream format
    //       +------------+---------------+
    //       | length <8> | hint <length> |
    //       +----------------------------+
    //
    // 2. Get back a single ack byte informing the the hint has been processed.
    pub fn hint(&mut self, hint: Hint) {
        let RW(ReadWrite { reader, writer }) = &mut self.hint_client;

        // Write hint request
        let mut hint_bytes = hint.get();
        let hint_length = hint_bytes.len();

        let mut msg: Vec<u8> = vec![];
        msg.append(&mut u64::to_be_bytes(hint_length as u64).to_vec());
        msg.append(&mut hint_bytes);

        let _ = writer.write(&msg);

        // Read single byte acknowledgment response
        let mut buf = [0_u8];
        // And do nothing with it anyway
        let _ = reader.read_exact(&mut buf);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // Test that bidirectional channels work as expected
    // That is, after creating a pair (c0, c1)
    // 1. c1's reader can read what c0's writer produces
    // 2. c0's reader can read what c1's writer produces
    #[test]
    fn test_bidir_channels() {
        let (mut c0, mut c1) = create_bidirectional_channel().unwrap();

        // 1. First send a single byte message
        let msg = [42_u8];
        let mut buf = [0_u8; 1];

        let r = c0.0.writer.write(&msg);
        assert!(r.is_ok());

        let r = c1.0.reader.read_exact(&mut buf);
        assert!(r.is_ok());

        // 2. Check that we correctly read the single byte message
        assert_eq!(msg, buf);

        // 3. Create a more structured message with the preimage format
        //      +------------+--------------------+
        //      | length <8> | pre-image <length> |
        //      +---------------------------------+
        //   Here we'll use a length of 2
        let len = 2_u64;
        let msg2 = vec![42_u8, 43_u8];
        let mut msg = u64::to_be_bytes(len).to_vec();
        msg.extend_from_slice(&msg2);

        // 4. Write the message
        let r = c1.0.writer.write(&msg);
        assert!(r.is_ok());

        // 5. Read back the length from the other end of the bidirectionnal
        // channel
        let mut len_buf: [u8; 8] = [0_u8; 8];
        let r = c0.0.reader.read_exact(&mut len_buf);
        assert!(r.is_ok());

        // 6. Check it is the expected length
        let n = u64::from_be_bytes(len_buf);
        assert_eq!(n, len);

        // 7. Read the data
        let mut data = vec![0_u8; n as usize];
        let mut h = c0.0.reader.take(len);
        let r = h.read(&mut data);
        assert!(r.is_ok());

        // 8. Check they are equal to the message
        assert_eq!(data, msg2);
    }
}
