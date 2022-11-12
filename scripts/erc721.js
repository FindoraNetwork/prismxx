const hre = require("hardhat");
const utils = require("./address_utils");

async function deploy_erc721() {
    let MTK = await hre.ethers.getContractFactory("MyToken");

    let gld = await MTK.deploy();

    await gld.deployed();

    console.log(gld.address);

    return gld;
}

async function main() {
    let addrs = await utils.get_prism_addrs();

    const receiver = "0x01020b0110ee320c89fa0e1ba5e676aebf383d505e33251635b7abacd54dbee1f618";
    
    let mtk = await deploy_erc721();

    await mtk.safeMint("0x72488bAa718F52B76118C79168E55c209056A2E6", 0);

    await mtk.approve(addrs.ledger, 0);

    const Bridge = await hre.ethers.getContractFactory("PrismXXBridge");
    let bridge = await Bridge.attach(addrs.bridge);

    await bridge.depositFRC721(mtk.address, receiver, 0);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

