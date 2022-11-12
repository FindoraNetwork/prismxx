const hre = require("hardhat");
const utils = require("./address_utils");

async function main() {
    let addrs = await utils.get_prism_addrs();

    console.log("proxy address:", addrs.proxy);
    console.log("bridge address:", addrs.bridge);
    console.log("ledger address:", addrs.ledger);
    console.log("asset address:", addrs.asset);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

