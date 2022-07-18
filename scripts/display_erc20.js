const hre = require("hardhat");

async function main() {
    const addr = "0xa897D081bf941bBD60E831EDFE219D5887eFC755";
    
    let GLD = await hre.ethers.getContractFactory("GLDToken");

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

