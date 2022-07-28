const hre = require("hardhat");

async function deploy_erc20() {
    let GLD = await hre.ethers.getContractFactory("GLDToken");

    let gld = await GLD.deploy();

    await gld.deployed();

    console.log(gld.address);

    return gld;
}

async function main() {
    const proxy_address = "0x0bafe641dbca0ef19eda10346d56fcd08032d35f";
    const bridge_address = "0x899d4d8f441E5B59EB21ceb58fce723bb5A85C55";
    const ledger_address = "0x48762c0161B97157e52df4F4C146973788157330";
    const asset_address = "0x86E6D28129Bf73B156C99A11A6bB75E276dBA66b";
    const erc20_prefix = "0x0000000000000000000000000000000000000000000000000000000000000077";
    const receiver = "0x982c2f5688c687862aeb1b19521324554eab3abd70e4284dd598ec1297e676aa";
    
    let gld = await deploy_erc20();

    const decimal = Math.pow(10, 18);;

    await gld.approve(ledger_address, "9000000000000000000");

    const Bridge = await hre.ethers.getContractFactory("PrismXXBridge");
    let bridge = await Bridge.attach(bridge_address);

    await bridge.depositFRC20(gld.address, receiver, "9000000000000000000");

    let amount = await gld.balanceOf(ledger_address);

    console.log(amount);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

