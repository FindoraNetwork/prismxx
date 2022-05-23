// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/proxy/Proxy.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./PrismXXBridge.sol";

contract PrismProxy is Proxy, Ownable {
    address public prismBridgeAddress;

    constructor() {
        PrismXXBridge bridge = new PrismXXBridge(address(this));

        prismBridgeAddress = address(bridge);
    }

    function adminSetPrismBridgeAddress(address _prismBridgeAddress)
        public
        onlyOwner
    {
        prismBridgeAddress = _prismBridgeAddress;
    }

    function _implementation() internal view override returns (address) {
        return prismBridgeAddress;
    }
}
