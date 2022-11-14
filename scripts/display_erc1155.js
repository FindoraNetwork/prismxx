const hre = require("hardhat");

async function main() {
    const addr = "0x11935A96254242bB94EFE7C348979AEcBFa221BE";
    
    let GLD = await hre.ethers.getContractFactory("MyERC1155");

    let gld = await GLD.attach(addr);

    let amount = await gld.balanceOf("0x72488bAa718F52B76118C79168E55c209056A2E6", 0);

    console.log(amount);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

