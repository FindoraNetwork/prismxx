const hre = require("hardhat");

async function main() {
    const factory_proxy = await hre.ethers.getContractFactory("PrismProxy");

    const proxy = await factory_proxy.attach("0x582a66c15108a417b80df3bf40fabd1a9f460621");

    const addr = await proxy.prismBridgeAddress();

    const factory = await hre.ethers.getContractFactory("PrismXXBridge");
    const bridge = await factory.attach(addr);

    const value = hre.ethers.utils.parseEther("1");

    let receipt = await bridge.depositFRA("0x982c2f5688c687862aeb1b19521324554eab3abd70e4284dd598ec1297e676aa", { value });

    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

