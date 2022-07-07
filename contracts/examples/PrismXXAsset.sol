// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

import "../interfaces/IPrismXXAsset.sol";

contract PrismXXAsset is Ownable, IPrismXXAsset {
    struct AssetInfo {
        address addr;
        uint256 tokenId;
        bool isNFT;
        bool isBurn;
    }

    mapping(bytes32 => AssetInfo) public assets;

    function getERC20Info(bytes32 _asset)
        external
        view
        override
        returns (address)
    {
        return assets[_asset].addr;
    }

    function setERC20Info(bytes32 _asset, address _addr) external override {
        AssetInfo storage info = assets[_asset];

        info.addr = _addr;
    }

    function getNFTInfo(bytes32 _asset)
        external
        view
        override
        returns (address, uint256)
    {
        AssetInfo storage info = assets[_asset];

        return (info.addr, info.tokenId);
    }

    function setNFTInfo(
        bytes32 _asset,
        address _addr,
        uint256 tokenId
    ) external override {
        AssetInfo storage info = assets[_asset];

        info.addr = _addr;
        info.tokenId = tokenId;
        info.isNFT = true;
    }

    function setBurn(bytes32 _asset) external onlyOwner {
        assets[_asset].isBurn = true;
    }

    function isBurn(bytes32 _asset) external view override returns (bool) {
        return assets[_asset].isBurn;
    }
}
