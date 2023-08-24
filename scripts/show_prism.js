const hre = require("hardhat");
const utils = require("./address_utils");

async function main() {
    let addrs = await utils.get_prism_addrs();

    console.log("bridge address:", addrs.bridge);
    console.log("ledger address:", addrs.ledger);
    console.log("asset address:", addrs.asset);

  const Bridge = await hre.ethers.getContractFactory("PrismXXBridge");
  let bridge = await Bridge.attach(addrs.bridge);
    const addr = await bridge.getRoleMember(bridge.DEFAULT_ADMIN_ROLE(), 0);
    console.log("admin for bridge:", addr);

  const Ledger = await hre.ethers.getContractFactory("PrismXXAsset");
  let ledger = await Ledger.attach(addrs.asset);
    const la = await ledger.getRoleMember(ledger.DEFAULT_ADMIN_ROLE(), 0);
    console.log("admin for ledger:", la);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

