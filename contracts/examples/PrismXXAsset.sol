// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IPrismXXAsset.sol";

contract PrismXXAsset is Ownable, IPrismXXAsset {

    struct AssetInfo {
        bytes32 asset;
        bool isBurn;
    }

    mapping(address => AssetInfo) public assetInfos;
    mapping(bytes32 => address) public assetToAddress;


    function adminSetAssetMaping(address _frc20, bytes32 _asset, bool _isBurn) public onlyOwner {
        AssetInfo memory info = AssetInfo(_asset, _isBurn);

        assetInfos[_frc20] = info;
        assetToAddress[_asset] = _frc20;
    }

    function adminResetAssetMappingByAddress(address _frc20) public onlyOwner {
        bytes32 asset = assetInfos[_frc20].asset;

        delete assetInfos[_frc20];
        delete assetToAddress[asset];
    }

    function getAssetByAddress(address _frc20) override public view returns(bytes32) {
        return assetInfos[_frc20].asset;
    }

    function getAddressByAsset(bytes32 _asset) override public view returns(address) {
        return assetToAddress[_asset];
    }

    function isBurn(address _frc20) public view returns(bool) {
        return assetInfos[_frc20].isBurn;
    }
}
