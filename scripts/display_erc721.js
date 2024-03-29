const hre = require("hardhat");

async function main() {
    const addr = "0xd682f2D477537Dfb9b9AD69Dd2B760104405c0B3";
    
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

