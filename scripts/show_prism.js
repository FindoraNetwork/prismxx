const hre = require("hardhat");

async function main() {
    const factory = await hre.ethers.getContractFactory("PrismProxy");
    const proxy = await factory.attach("0x0bafe641dbca0ef19eda10346d56fcd08032d35f");

    console.log(proxy.address);

    const bridge_address = await proxy.prismBridgeAddress();

    console.log("bridge address:", bridge_address);

    const Bridge = await hre.ethers.getContractFactory("PrismXXBridge");

    const bridge = await Bridge.attach(bridge_address);

    const ledger_address = await bridge.ledger_contract();
    const asset_address = await bridge.asset_contract();

    console.log("ledger address:", ledger_address);
    console.log("asset address:", asset_address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

