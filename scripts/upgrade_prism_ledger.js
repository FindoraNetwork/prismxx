const {ethers, upgrades} = require("hardhat");

async function main() {
    // Deploying
    const PrismXXLedger = await ethers.getContractFactory("PrismXXLedger");
    const instance = await upgrades.deployProxy(
        PrismXXLedger,
        ["0xc8fa18086db6846aa4a330e88698357142262256", "0xc8fa18086db6846aa4a330e88698357142262256"],
        {
            unsafeAllow: ['delegatecall'],
        },
    );
    await instance.deployed();

    // Upgrading
    const PrismXXLedgerV2 = await ethers.getContractFactory("PrismXXLedger");
    const upgraded = await upgrades.upgradeProxy(
        instance.address, PrismXXLedgerV2,
        {
            unsafeAllow: ['delegatecall'],
        },
    );
}

main();