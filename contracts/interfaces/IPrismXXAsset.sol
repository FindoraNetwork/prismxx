// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IPrismXXAsset {
    function getAssetByAddress(address _frc20) external view returns(bytes32);

    function getAddressByAsset(bytes32 _asset) external view returns(address);
}

