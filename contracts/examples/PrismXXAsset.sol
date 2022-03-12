// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PrismXXAsset is Ownable {

    struct AssetInfo {
        bytes32 asset;
        bool isBurn;
    }

    mapping(address => AssetInfo) public assetInfos;
    mapping(bytes32 => address) public assetToAddress;


    function adminSetAssetMaping(address _erc20, bytes32 _asset, bool _isBurn) public onlyOwner {
        AssetInfo memory info = AssetInfo(_asset, _isBurn);

        assetInfos[_erc20] = info;
        assetToAddress[_asset] = _erc20;
    }

    function adminResetAssetMappingByAddress(address _erc20) public onlyOwner {
        bytes32 asset = assetInfos[_erc20].asset;

        delete assetInfos[_erc20];
        delete assetToAddress[asset];
    }

    function addressToAsset(address _erc20) public view returns(bytes32) {
        return assetInfos[_erc20].asset;
    }

    function isBurn(address _erc20) public view returns(bool) {
        return assetInfos[_erc20].isBurn;
    }
}
