// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/proxy/Proxy.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./PrismXXBridge.sol";

/**
 * @dev prismProxy proxy contract that can be upgrade
 */
contract PrismProxy is Proxy, Ownable {
    // address of prism bridge
    address public prismBridgeAddress;

    /**
     * @dev constructor function, for create prismBridge and init prismBridgeAddress.
     */
    constructor() {
        PrismXXBridge bridge = new PrismXXBridge(address(this));

        prismBridgeAddress = address(bridge);
    }

    /**
     * @dev Set prism bridge address, this function can only be called by owner.
     * @param _prismBridgeAddress contract address of bridge
     */
    function adminSetPrismBridgeAddress(address _prismBridgeAddress)
        public
        onlyOwner
    {
        prismBridgeAddress = _prismBridgeAddress;
    }

    /**
     * @dev Get prism bridge address.
     * @return contract address of bridge.
     */
    function _implementation() internal view override returns (address) {
        return prismBridgeAddress;
    }
}
