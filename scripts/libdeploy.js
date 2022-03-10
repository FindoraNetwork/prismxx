async function deployContract(name) {
    let PrismXXAsset = await ethers.getContractFactory(name);
    let asset = await PrismXXAsset.deploy();

    await asset.deployed();

    let address = asset.address;

    console.log(name + " deploy at", address);

    return asset;
}

async function deploy(ethers) {
    let asset = await deployContract("PrismXXAsset");
    let ledger = await deployContract("PrismXXLedger");
    let bridge = await deployContract("PrismXXBridge");

    // Set ledger and asset to bridge.
    await bridge.adminSetLedger(ledger.address);
    await bridge.adminSetAsset(asset.address);
    await ledger.adminSetBridge(bridge.address);
}

module.exports = {
    deploy,
    deployContract,
}

