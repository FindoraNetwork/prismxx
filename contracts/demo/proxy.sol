// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract ProxyContract is Initializable {
    string public contract_name;

    function initialize(string memory _contract_name) public initializer {
        contract_name = _contract_name;
    }
}
