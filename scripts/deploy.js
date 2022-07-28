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

// async function deploy_ledger(bridge, asset) {
//     let Ledger = await hre.ethers.getContractFactory("PrismXXLedger");
//
//     let ledger = await Ledger.deploy(bridge.address, asset);
//
//     await ledger.deployed();
//
//     console.log("ledegr address is:", ledger.address);
//
//     let receipt = await bridge.adminSetLedger(ledger.address);
//
//     return ledger;
// }

async function deploy_ledger() {
    let Ledger = await hre.ethers.getContractFactory("PrismXXLedger");

    let ledger = await Ledger.deploy();

    await ledger.deployed();

    console.log("ledger address is:", ledger.address);

    return ledger.address;
}

async function deploy_proxy_admin() {
    let ProxyAdmin = await hre.ethers.getContractFactory("PrismXXProxyAdmin");

    let proxyAdmin = await ProxyAdmin.deploy();

    await proxyAdmin.deployed();

    console.log("PrismXXProxyAdmin address is:", proxyAdmin.address);

    return proxyAdmin.address;
}

async function deploy_proxy() {

    let ledger_address = await deploy_ledger();
    let proxy_admin_address = await deploy_proxy_admin();
    let PrismXXProxy = await hre.ethers.getContractFactory("PrismXXProxy");

    let proxy = await PrismXXProxy.deploy(ledger_address,proxy_admin_address,"0x8129fc1c");

    await proxy.deployed();

    console.log("PrismXXProxy address is:", proxy.address);

    return proxy.address;
}

async function main() {
    let bridge = await redeploy_bridge("0x0bafe641dbca0ef19eda10346d56fcd08032d35f");
    
    let asset = await deploy_asset(bridge);

    let ledger = await deploy_proxy();

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

