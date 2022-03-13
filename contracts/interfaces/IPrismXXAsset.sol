// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IPrismXXAsset {
    function getAssetByAddress(address _frc20) external view returns(bytes32);

    function getAddressByAsset(bytes32 _asset) external view returns(address);

    function toFRC20Decimal(address _frc20, uint256 amount) external view returns(uint256);

    function toAssetDecimal(bytes32 _asset, uint256 amount) external view returns(uint256);
}

