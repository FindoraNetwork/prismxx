// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Create2.sol";

contract Creator {
    function deploy_create2(uint256 amount, bytes32 salt, bytes calldata bytecode) external returns(address) {
        return Create2.deploy(amount, salt, bytecode);
    }
}

