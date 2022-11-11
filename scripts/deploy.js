const hre = require("hardhat");

async function deploy_asset(bridge) {
    const Asset = await hre.ethers.getContractFactory("PrismXXAsset");

    const asset = await hre.upgrades.deployProxy(Asset, [bridge.address]);

    await asset.deployed();

    console.log("asset address is:", asset.address);

    await bridge.adminSetAsset(asset.address);

    return asset.address;
}

async function redeploy_bridge(proxy_address) {
    let Bridge = await hre.ethers.getContractFactory("PrismXXBridge");

    let bridge = await Bridge.deploy(proxy_address);

    await bridge.deployed();

    console.log("Bridge address is:", bridge.address);

    let factory_proxy = await hre.ethers.getContractFactory("PrismProxy");

    let proxy = await factory_proxy.attach(proxy_address);

    console.log("Owner of proxy is :", await proxy.owner());

    await proxy.adminSetPrismBridgeAddress(bridge.address);

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

async function main() {
    let bridge = await redeploy_bridge("0x0bafe641dbca0ef19eda10346d56fcd08032d35f");
    
    let asset = await deploy_asset(bridge);

    await deploy_ledger(bridge, asset);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

