// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PrismXXAsset is Ownable {
    mapping(address => bytes32) public addressToAsset;
    mapping(bytes32 => address) public assetToAddress;


    function adminSetAssetMaping(address erc20, bytes32 asset) public onlyOwner {
        addressToAsset[erc20] = asset;
        assetToAddress[asset] = erc20;
    }

    function adminResetAssetMappingByAddress(address erc20) public onlyOwner {
        bytes32 asset = addressToAsset[erc20];
        delete addressToAsset[erc20];
        delete assetToAddress[asset];
    }
}
