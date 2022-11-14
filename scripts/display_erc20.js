const hre = require("hardhat");

async function main() {
    const addr = "0x851f669146a97450ae17314F6568afc3E0B52121";
    
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

