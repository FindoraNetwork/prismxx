const hre = require("hardhat");
const utils = require("./address_utils");

async function main() {
    const addrs = await utils.get_prism_addrs();

    console.log(addrs);

    const factory = await hre.ethers.getContractFactory("PrismXXBridge");
    const bridge = await factory.attach(addrs.bridge);

    const role = await bridge.PAUSABLE_ROLE();

    let receipt1 = await bridge.grantRole(role, 0x72488baa718f52b76118c79168e55c209056a2e6);

    console.log(receipt1.hash)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

