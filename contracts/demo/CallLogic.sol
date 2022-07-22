// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract CallLogic {
    using ECDSA for bytes32;

    function getCallData(address bridge) public pure returns (bytes memory) {
        bytes32 selectorFn = keccak256("initialize(address)");
        return abi.encode(selectorFn, bridge);
    }
}
