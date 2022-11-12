const hre = require("hardhat");
const utils = require("./address_utils");

async function main() {
    const addrs = await utils.get_prism_addrs();

    const factory = await hre.ethers.getContractFactory("PrismXXBridge");
    const bridge = await factory.attach(addrs.bridge);

    const value = hre.ethers.utils.parseEther("1");

    let receipt = await bridge.depositFRA("0x01020b0110ee320c89fa0e1ba5e676aebf383d505e33251635b7abacd54dbee1f618", { value });

    console.log(receipt.hash)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

