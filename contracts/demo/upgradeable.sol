// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";

contract UpgradeableERC721 is
    Initializable,
    OwnableUpgradeable,
    ERC721Upgradeable
{
    string public contract_name;

    function initialize(
        string memory _contract_name,
        string memory _coin_name,
        string memory _coin_alias
    ) public initializer {
        contract_name = _contract_name;
        __ERC721_init(_coin_name, _coin_alias);
    }
}
