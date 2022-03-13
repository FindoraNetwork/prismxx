// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IPrismXXAsset.sol";

contract PrismXXAsset is Ownable, IPrismXXAsset {

    struct AssetInfo {
        bytes32 asset;
        bool isBurn;
        uint8 decimal;
    }

    mapping(address => AssetInfo) public assetInfos;
    mapping(bytes32 => address) public assetToAddress;


    function adminSetAssetMaping(address _frc20, bytes32 _asset, bool _isBurn, uint8 _decimal) public onlyOwner {
        AssetInfo memory info = AssetInfo(_asset, _isBurn, _decimal);

        assetInfos[_frc20] = info;
        assetToAddress[_asset] = _frc20;
    }

    function adminResetAssetMappingByAddress(address _frc20) public onlyOwner {
        bytes32 asset = assetInfos[_frc20].asset;

        delete assetInfos[_frc20];
        delete assetToAddress[asset];
    }

    function getAssetByAddress(address _frc20) override external view returns(bytes32) {
        return assetInfos[_frc20].asset;
    }

    function getAddressByAsset(bytes32 _asset) override external view returns(address) {
        return assetToAddress[_asset];
    }

    function toFRC20Decimal(address _frc20, uint256 amount) override external view returns(uint256) {
        return amount;
    }

    function toAssetDecimal(bytes32 asset, uint256 amount) override external view returns(uint256) {
        return amount;
    }

    function isBurn(address _frc20) public view returns(bool) {
        return assetInfos[_frc20].isBurn;
    }
}
