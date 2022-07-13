require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {},
        localhost: {
            url: "http://localhost:8545",
            accounts: ["0x975dbe2d0c9b60c108375732fcbf8bef0c6670bae9dfb6334ddc615433bf5448"]
        }
    }
};
