// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IPrismXXAsset {
    function getAssetByAddress(address _frc20) external view returns(bytes32);

    function getAddressByAsset(bytes32 _asset) external view returns(address);

    function depositDecimal(address _frc20, uint256 amount) external view returns(uint256);

    function withdrawDecimal(address _frc20, uint256 amount) external view returns(uint256);

    // function checkDecimal(address _frc20, uint256 amount) external view returns(uint256);
}

