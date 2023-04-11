const hre = require("hardhat");
const utils = require("./address_utils");

async function deploy_erc1155() {
  let MTK = await hre.ethers.getContractFactory("MyERC1155");

  let gld = await MTK.deploy();

  await gld.deployed();

  console.log(gld.address);

  return gld;
}

async function main() {
  const addrs = await utils.get_prism_addrs();

  const receiver = "0x39ad91453cdd6b203c57638113bc69de7dcd2ab8c62711534996726d73970834";

  let mtk = await deploy_erc1155();

  await mtk.mint("0x72488bAa718F52B76118C79168E55c209056A2E6", 0, 100, "0x");

  await mtk.setApprovalForAll(addrs.ledger, true);
  const Bridge = await hre.ethers.getContractFactory("PrismXXBridge");
  let bridge = await Bridge.attach(addrs.bridge);

  await bridge.depositFRC1155(mtk.address, receiver, 0, 100);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

