const hre = require("hardhat");

async function deploy_asset(bridge) {
    const Asset = await hre.ethers.getContractFactory("PrismXXAsset");

    const asset = await Asset.deploy(bridge.address);

    await asset.deployed();

    console.log("asset address is:", asset.address);

    let receipt = await bridge.adminSetAsset(asset.address);

    return asset;
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

async function deploy_ledger(bridge, asset) {
    let Ledger = await hre.ethers.getContractFactory("PrismXXLedger");

    let ledger = await Ledger.deploy(bridge.address, asset);

    await ledger.deployed();

    console.log("ledegr address is:", ledger.address);

    let receipt = await bridge.adminSetLedger(ledger.address);

    return ledger;
}

async function main() {
    let bridge = await redeploy_bridge("0xc8fa18086db6846aa4a330e88698357142262256");
    
    let asset = await deploy_asset(bridge);

    let ledger = await deploy_ledger(bridge, asset.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

