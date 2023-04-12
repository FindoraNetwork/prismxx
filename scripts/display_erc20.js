const hre = require("hardhat");

async function main() {
    const addr = "0xdE981A3249df3f10d7c8768554118b16D63b4132";
    
    let GLD = await hre.ethers.getContractFactory("GLDToken");

    let gld = await GLD.attach(addr);

    let amount = await gld.balanceOf("0x7788d7Ca258E08964862DF1567FA808fCA42a298");

    console.log(amount);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

