const hre = require("hardhat");
const { deploy } = require("./libdeploy.js");

async function main() {
    await deploy();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

