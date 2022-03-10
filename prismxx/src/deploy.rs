use std::path::Path;

use anyhow::Result;
use clap::Parser;
use web3::{api::Eth, contract::{Contract, Options}, signing::Key, transports::Http, Web3};

use crate::utils;

#[derive(Debug, Parser)]
pub struct Deploy {
    /// json for PrismXXAsset.
    #[clap(short, long)]
    pub asset: String,
    #[clap(short, long)]
    pub ledger: String,
    #[clap(short, long)]
    pub bridge: String,
}

impl Deploy {
    pub async fn execute(self, web3: Web3<Http>, key: impl Key + Clone) -> Result<()> {
        let asset = deploy(Path::new(&self.asset), web3.eth(), key.clone()).await?;
        println!("PrismXXAsset address is: {}", asset.address());

        let ledger = deploy(Path::new(&self.ledger), web3.eth(), key.clone()).await?;
        println!("PrismXXLedger address is: {}", ledger.address());

        let bridge = deploy(Path::new(&self.bridge), web3.eth(), key.clone()).await?;
        println!("PrismXXBridge address is: {}", bridge.address());

        bridge.signed_call("adminSetLedger", ledger.address(), Options::default(), key.clone()).await?;
        bridge.signed_call("adminSetAsset", asset.address(), Options::default(), key.clone()).await?;
        ledger.signed_call("adminSetBridge", bridge.address(), Options::default(), key).await?;

        Ok(())
    }
}

async fn deploy(path: &Path, eth: Eth<Http>, from: impl Key) -> Result<Contract<Http>> {
    let ct = utils::Contract::with_path(path).await?;

    let abi = ct.abi_bytes()?;

    let builder = Contract::deploy(eth, &abi)?;

    let contract = builder
        .sign_with_key_and_execute(&ct.bytecode, (), from, None)
        .await?;
    Ok(contract)
}
