const hre = require("hardhat");
const utils = require("./address_utils");

async function main() {
    const addrs = await utils.get_prism_addrs();

    console.log(addrs);

    const factory = await hre.ethers.getContractFactory("PrismXXBridge");
    const bridge = await factory.attach(addrs.bridge);

    const value = hre.ethers.utils.parseEther("1");

    let receipt1 = await bridge.depositFRA("0x1d99f1c0f2393c3ff1a505f536a2931d7a8f7475d55ed19eef2434248dcc553b", { value });

    console.log(receipt1.hash)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

