const hre = require("hardhat");
const utils = require("./address_utils");

async function deploy_erc20() {
    let GLD = await hre.ethers.getContractFactory("GLDToken");

    let gld = await GLD.deploy();

    await gld.deployed();

    console.log("ERC20: ", gld.address);

    return gld;
}

async function deploy_erc721() {
    let MTK = await hre.ethers.getContractFactory("MyToken");

    let gld = await MTK.deploy();

    await gld.deployed();

    console.log("ERC721: ", gld.address);

    return gld;
}

async function deploy_erc1155() {
    let MTK = await hre.ethers.getContractFactory("MyERC1155");

    let gld = await MTK.deploy();

    await gld.deployed();

    console.log("ERC1155: ", gld.address);

    return gld;
}

async function main() {
    await deploy_erc20();

    let mtk = await deploy_erc721();
    await mtk.safeMint("0x72488bAa718F52B76118C79168E55c209056A2E6", 0);

    let my = await deploy_erc1155();
    await my.mint("0x72488bAa718F52B76118C79168E55c209056A2E6", 0, 100, "0x");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

