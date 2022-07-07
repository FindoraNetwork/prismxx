// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

import "../interfaces/IPrismXXAsset.sol";

/**
 * @dev prism asset manager contract
 */
contract PrismXXAsset is Ownable, IPrismXXAsset {
    // status information for the asset
    struct AssetInfo {
        bytes32 asset;
        bool isBurn;
        uint8 decimal;
    }

    mapping(address => AssetInfo) public assetInfos;   // token info
    mapping(bytes32 => address) public assetToAddress; // mapping asset to token address

    /**
     * @dev Add asset information, this function can only be called by owner.
     * @param _frc20 the address of the token.
     * @param _asset the encoded ID of the asset.
     * @param _isBurn whether the token can be mint.
     * @param _decimal decimal of token.
     */
    function adminSetAssetMaping(
        address _frc20,
        bytes32 _asset,
        bool _isBurn,
        uint8 _decimal
    ) public onlyOwner {
        AssetInfo memory info = AssetInfo(_asset, _isBurn, _decimal);

        assetInfos[_frc20] = info;
        assetToAddress[_asset] = _frc20;
    }

    /**
     * @dev Delete asset information, this function can only be called by owner.
     * @param _frc20 the address of the token.
     */
    function adminResetAssetMappingByAddress(address _frc20) public onlyOwner {
        bytes32 asset = assetInfos[_frc20].asset;

        delete assetInfos[_frc20];
        delete assetToAddress[asset];
    }

    /**
     * @dev Get asset by token address.
     * @param _frc20 the address of the token.
     * @return asset data.
     */
    function getAssetByAddress(address _frc20)
        external
        view
        override
        returns (bytes32)
    {
        return assetInfos[_frc20].asset;
    }

    /**
     * @dev Get token address by asset.
     * @param _asset the encoded ID of the asset
     * @return token address.
     */
    function getAddressByAsset(bytes32 _asset)
        external
        view
        override
        returns (address)
    {
        return assetToAddress[_asset];
    }

    /**
     * @dev Converte deposit decimal, the decimal of the token and decimal of the asset may be different.
     * @param _frc20 the address of token
     * @param amount amount for deposit.
     * @return formatted amount.
     */
    function depositDecimal(address _frc20, uint256 amount)
        external
        view
        override
        returns (uint256)
    {
        IERC20Metadata mc = IERC20Metadata(_frc20);

        uint8 assetDecimal = assetInfos[_frc20].decimal;
        uint8 frc20Decimal = mc.decimals();

        if (frc20Decimal > assetDecimal) {
            uint8 diff = frc20Decimal - assetDecimal;
            uint256 res = amount / (10**diff);

            require(res * (10**diff) == amount, "Low digital must be 0.");

            return res;
        } else if (assetDecimal > frc20Decimal) {
            uint8 diff = assetDecimal - frc20Decimal;

            return amount * (10**diff);
        }
        return amount;
    }

    /**
     * @dev Converte withdraw decimal, the decimal of the token and decimal of the asset may be different.
     * @param _frc20 the address of token
     * @param amount amount for withdraw.
     * @return formatted amount.
     */
    function withdrawDecimal(address _frc20, uint256 amount)
        external
        view
        override
        returns (uint256)
    {
        IERC20Metadata mc = IERC20Metadata(_frc20);

        uint8 assetDecimal = assetInfos[_frc20].decimal;
        uint8 frc20Decimal = mc.decimals();

        if (assetDecimal > frc20Decimal) {
            uint8 diff = assetDecimal - frc20Decimal;
            uint256 res = amount / (10**diff);

            require(res * (10**diff) == amount, "Low digital must be 0.");

            return res;
        } else if (frc20Decimal > assetDecimal) {
            uint8 diff = frc20Decimal - assetDecimal;

            return amount * (10**diff);
        }
        return amount;
    }

    /**
     * @dev Get whether this asset can be burn.
     * @param _frc20 the address of the token.
     * @return return true if the asset can be burn, otherwise return false.
     */
    function isBurn(address _frc20) public view returns (bool) {
        return assetInfos[_frc20].isBurn;
    }
}
