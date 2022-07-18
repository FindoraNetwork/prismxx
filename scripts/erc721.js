const hre = require("hardhat");

async function deploy_erc721() {
    let MTK = await hre.ethers.getContractFactory("MyToken");

    let gld = await MTK.deploy();

    await gld.deployed();

    console.log(gld.address);

    return gld;
}

async function main() {
    const proxy_address = "0xc8fa18086db6846aa4a330e88698357142262256";
    const bridge_address = "0x2B7835AE05C9Cb5EF086e3BFe249e2658b450E8d";
    const ledger_address = "0xeE8Ffb1D3CE088A2415f1F9C00585a296EE063B7";
    const asset_address = "0x5f9552fEd754F20B636C996DaDB32806554Bb995";
    const erc20_prefix = "0x0000000000000000000000000000000000000000000000000000000000000077";
    const receiver = "0x982c2f5688c687862aeb1b19521324554eab3abd70e4284dd598ec1297e676aa";
    
    let mtk = await deploy_erc721();

    await mtk.safeMint("0x72488bAa718F52B76118C79168E55c209056A2E6", 0);

    await mtk.approve(ledger_address, 0);

    const Bridge = await hre.ethers.getContractFactory("PrismXXBridge");
    let bridge = await Bridge.attach(bridge_address);

    await bridge.depositFRC721(mtk.address, receiver, 0);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

