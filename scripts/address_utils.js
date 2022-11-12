const axios = require("axios");

async function get_proxy_address() {
    let checkpoint = await axios.get("http://127.0.0.1:8668/display_checkpoint");
    let proxy_address = checkpoint.data.prism_bridge_address;

    return proxy_address;
}

async function get_bridge_address(proxy_address) {
    const factory = await hre.ethers.getContractFactory("PrismProxy");
    const proxy = await factory.attach(proxy_address);

    const bridge_address = await proxy.prismBridgeAddress();

    return bridge_address;
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
    let proxy = await get_proxy_address();
    let bridge = await get_bridge_address(proxy);
    let { ledger, asset } = await get_ledger_asset_address(bridge);

    return {
        proxy,
        bridge,
        ledger,
        asset
    }
}

module.exports = {
    get_proxy_address,
    get_bridge_address,
    get_ledger_asset_address,
    get_prism_addrs,
}

