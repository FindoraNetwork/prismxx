const hre = require("hardhat");
// const utils = require("./address_utils");

async function deploy_asset(bridge) {
    const Asset = await hre.ethers.getContractFactory("PrismXXAsset");

    const asset = await hre.upgrades.deployProxy(Asset, [bridge.address]);

    await asset.deployed();

    console.log("asset address is:", asset.address);

    await bridge.adminSetAsset(asset.address);

    return asset.address;
}

async function redeploy_bridge() {

    let Bridge = await hre.ethers.getContractFactory("PrismXXBridge");

    const bridge = await hre.upgrades.deployProxy(Bridge, []);

    await bridge.deployed();

    console.log("Bridge address is:", bridge.address);

    return bridge;
}

async function deploy_ledger(bridge, asset_address) {
    let Ledger = await hre.ethers.getContractFactory("PrismXXLedger");

    // let ledger = await Ledger.deploy();
    const ledger = await hre.upgrades.deployProxy(Ledger, [bridge.address, asset_address]);

    await ledger.deployed();

    console.log("ledger address is:", ledger.address);

    await bridge.adminSetLedger(ledger.address);
}

async function deploy_bridge() {
    let BridgeCreator = await hre.ethers.getContractFactory("PrismXXBridgeCreator");

    const creator = await BridgeCreator.deploy();

    await creator.deployed();

    console.log(creator.address);

    const SALT = "0x0000000000000000000000000000000000000000";

    const bridge_addr = await creator.deploy_create2(SALT);

    console.log("Bridge address is:", bridge_addr);

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

