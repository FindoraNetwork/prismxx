// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IPrismXXLedger {
    function depositFRC20(
        address _frc20,
        address _target,
        uint256 _amount
    ) external;

    function withdrawFRC20(
        address _frc20,
        address _target,
        uint256 _amount,
        bytes calldata _data
    ) external;

    function depositFRC721(
        address _addr,
        address _target,
        uint256 _id
    ) external;

    function withdrawFRC721(
        address _addr,
        address _target,
        uint256 _id,
        bytes calldata _data
    ) external;

    function depositFRC1155(
        address _addr,
        address _target,
        uint256 _id,
        uint256 _amount
    ) external;

    function withdrawFRC1155(
        address _addr,
        address _target,
        uint256 _id,
        uint256 _amount,
        bytes calldata _data
    ) external;
}
