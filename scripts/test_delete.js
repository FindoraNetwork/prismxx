const hre = require("hardhat");

async function main() {
    const factory = await hre.ethers.getContractFactory("PrismXXBridge");
    const bridge = await factory.deploy("0x7357b734265a3f60D2B3D835d3Ef2ffD29720870");

    console.log(bridge.address);

    const value = hre.ethers.utils.parseEther("1");

    const receipt = await bridge.depositFRA("0x982c2f5688c687862aeb1b19521324554eab3abd70e4284dd598ec1297e676aa", { value });

    console.log(receipt);

    const result = await bridge._consumeMint();

    console.log(await result.wait());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

