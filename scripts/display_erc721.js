const hre = require("hardhat");

async function main() {
    const addr = "0x039849E3EAe3D525Fd21a19b5400b0d1Bd3AB61C";
    
    let GLD = await hre.ethers.getContractFactory("MyToken");

    let gld = await GLD.attach(addr);

    let amount = await gld.balanceOf("0x72488bAa718F52B76118C79168E55c209056A2E6");

    console.log(amount);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

