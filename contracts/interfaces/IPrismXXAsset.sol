// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IPrismXXAsset {
    function getERC20Info(bytes32 _asset) external view returns (address);

    function setERC20Info(bytes32 _asset, address _addr) external;

    function getNFTInfo(bytes32 _asset)
        external
        view
        returns (address, uint256);

    function setNFTInfo(
        bytes32 _asset,
        address _addr,
        uint256 tokenId
    ) external;

    function isBurn(bytes32 _asset) external view returns (bool);
}
