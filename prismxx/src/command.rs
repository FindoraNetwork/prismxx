use std::str::FromStr;

use anyhow::Result;
use clap::{Parser, Subcommand};
use secp256k1::SecretKey;

use crate::deploy::Deploy;

#[derive(Debug, Parser)]
#[clap(author, version, about, long_about = None)]
pub struct Args {
    /// Endpoint to web3 API.
    #[clap(short, long)]
    pub endpoint: String,

    /// Private key for operate.
    #[clap(short, long)]
    pub private_key: String,

    #[clap(subcommand)]
    pub command: Commands,
}

impl Args {
    pub async fn execute(self) -> Result<()> {
        let http = web3::transports::http::Http::new(&self.endpoint)?;
        let web3 = web3::Web3::new(http);

        let key = SecretKey::from_str(&self.private_key)?;

        match self.command {
            Commands::Deploy(e) => e.execute(web3, &key).await?,
            _ => {}
        }

        Ok(())
    }
}

#[derive(Subcommand, Debug)]
pub enum Commands {
    Deploy(Deploy),
    Deposit,
    Withdraw,
    Regist,
}
