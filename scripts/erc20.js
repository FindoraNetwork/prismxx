const hre = require("hardhat");
const utils = require("./address_utils");

async function deploy_erc20() {
    let GLD = await hre.ethers.getContractFactory("GLDToken");

    let gld = await GLD.deploy();

    await gld.deployed();

    console.log(gld.address);

    return gld;
}

async function main() {
    let addrs = await utils.get_prism_addrs();

    const receiver = "0x01020b0110ee320c89fa0e1ba5e676aebf383d505e33251635b7abacd54dbee1f618";
    
    let gld = await deploy_erc20();

    await gld.approve(addrs.ledger, "9000000000000000000");

    const Bridge = await hre.ethers.getContractFactory("PrismXXBridge");
    let bridge = await Bridge.attach(addrs.bridge);

    await bridge.depositFRC20(gld.address, receiver, "9000000000000000000");

    let amount = await gld.balanceOf(addrs.ledger);

    console.log(amount);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

