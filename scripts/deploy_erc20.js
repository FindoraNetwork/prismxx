const hre = require("hardhat");
const { deployContract } = require("./libdeploy.js");

async function main() {
    await deployContract("GLDToken");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

