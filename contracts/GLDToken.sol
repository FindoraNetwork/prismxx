// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLDToken is ERC20 {
    constructor() ERC20("Gold", "GLD") {
        _mint(msg.sender, 8000000 * 10**decimals());
    }

    function decimals() public view virtual override returns (uint8) {
        return 6;
    }
}
