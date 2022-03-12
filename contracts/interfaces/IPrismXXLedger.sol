// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IPrismXXLedger {
    function depositFRC20(address _frc20, address _target, uint256 _amount) external;

    function withdrawFRC20(address _frc20, address _target, uint256 _amount) external;
}

