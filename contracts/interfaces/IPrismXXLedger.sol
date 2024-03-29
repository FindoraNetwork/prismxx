// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IPrismXXLedger {
    function depositFRC20(
        address _frc20,
        address _target,
        uint256 _amount
    ) external;

    function withdrawFRC20(
        address _frc20,
        address _target,
        uint256 _amount
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
        uint256 _ids,
        uint256 _amounts
    ) external;

    function withdrawFRC1155(
        address _addr,
        address _target,
        uint256 _ids,
        uint256 _amounts,
        bytes calldata _data
    ) external;
}
