const axios = require("axios");


async function get_bridge_address() {
    // let checkpoint = await axios.get("http://127.0.0.1:8668/display_checkpoint");
    // let bridge_address = checkpoint.data.prism_bridge_address;

    return "0x5f9552fEd754F20B636C996DaDB32806554Bb995";
}

async function get_ledger_asset_address(bridge_addr) {
    const Bridge = await hre.ethers.getContractFactory("PrismXXBridge");

    const bridge = await Bridge.attach(bridge_addr);

    const ledger = await bridge.ledger_contract();
    const asset = await bridge.asset_contract();

    return {
        ledger, asset,
    }
}

async function get_prism_addrs() {
    let bridge = await get_bridge_address();
    let { ledger, asset } = await get_ledger_asset_address(bridge);

    return {
        bridge,
        ledger,
        asset
    }
}

module.exports = {
    get_bridge_address,
    get_ledger_asset_address,
    get_prism_addrs,
}

