use anyhow::Result;
use clap::Parser;
use command::Args;

mod command;
mod deploy;
mod utils;

#[tokio::main]
async fn main() -> Result<()> {
    let args = Args::parse();

    args.execute().await?;

    Ok(())
}
