use std::path::Path;

use anyhow::Result;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Contract {
    pub abi: serde_json::Value,
    pub bytecode: String,
}

impl Contract {
    pub async fn with_path(path: &Path) -> Result<Self> {
        let content = tokio::fs::read_to_string(path).await?;

        let contract = serde_json::from_str(&content)?;

        Ok(contract)
    }

//     pub fn bytecode_bytes(&self) -> Result<Vec<u8>> {
        // let data = self.bytecode[2..].trim();
        //
        // let h = hex::decode(data)?;
        //
        // Ok(h)
//     }

    pub fn abi_bytes(&self) -> Result<Vec<u8>> {
        let r = serde_json::to_vec(&self.abi)?;
        Ok(r)
    }
}
