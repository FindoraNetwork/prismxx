// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

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

    function depositDecimal(address _frc20, uint256 amount) override external view returns(uint256) {
        IERC20Metadata mc = IERC20Metadata(_frc20);

        uint8 assetDecimal = assetInfos[_frc20].decimal;
        uint8 frc20Decimal = mc.decimals();

        if (frc20Decimal > assetDecimal) {
            uint8 diff = frc20Decimal - assetDecimal;
            uint256 res = amount / (10 ** diff);

            require(res * (10 ** diff) == amount, "Low digital must be 0." );

            return res;
        } else if (assetDecimal > frc20Decimal) {
            uint8 diff = assetDecimal - frc20Decimal;

            return amount * (10 ** diff);
        }
        return amount;
    }

    function withdrawDecimal(address _frc20, uint256 amount) override external view returns(uint256) {
        IERC20Metadata mc = IERC20Metadata(_frc20);

        uint8 assetDecimal = assetInfos[_frc20].decimal;
        uint8 frc20Decimal = mc.decimals();

        if (assetDecimal > frc20Decimal) {
            uint8 diff = assetDecimal - frc20Decimal;
            uint256 res = amount / (10 ** diff);

            require(res * (10 ** diff) == amount, "Low digital must be 0." );

            return res;
        } else if (frc20Decimal > assetDecimal) {
            uint8 diff = frc20Decimal - assetDecimal;

            return amount * (10 ** diff);
        }
        return amount;
    }

    function isBurn(address _frc20) public view returns(bool) {
        return assetInfos[_frc20].isBurn;
    }
}
