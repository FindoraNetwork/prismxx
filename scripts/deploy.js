const hre = require("hardhat");

async function deploy_bridge() {
    let Bridge = await hre.ethers.getContractFactory("PrismXXBridge");
    let Ledger = await hre.ethers.getContractFactory("PrismXXLedger");
    let Asset = await hre.ethers.getContractFactory("PrismXXAsset");

    let BridgeCreator = await hre.ethers.getContractFactory("PrismXXBridgeCreator");
    const creator = await BridgeCreator.deploy();
    await creator.deployed();
    console.log("BridgeCreator address is:", creator.address);

    let SALT = "0x0000000000000000000000000000000000000000000000000000000000000001";
    const bridge_addr = await creator.deploy_create2(0, SALT, Bridge.bytecode);
    console.log("Bridge address is:", bridge_addr);

    SALT = "0x0000000000000000000000000000000000000000000000000000000000000002";
    const ledger_addr = await creator.deploy_create2(0, SALT, Ledger.bytecode);
    console.log("Bridge address is:", ledger_addr);

    SALT = "0x0000000000000000000000000000000000000000000000000000000000000003";
    const asset_addr = await creator.deploy_create2(0, SALT, Asset.bytecode);
    console.log("Bridge address is:", asset_addr);

    const bridge = Bridge.attach(bridge_addr);
    await bridge.adminSetLedger(ledger_addr);
    await bridge.adminSetAsset(asset_addr);
    return bridge_addr;
}

async function main() {
    await deploy_bridge();

    // await deploy_ledger(bridge, asset);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

