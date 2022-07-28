require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {},
        localhost: {
            url: "http://localhost:8545",
            accounts: ["0x4d05b965f821ea900ddd995dfa1b6caa834eaaa1ebe100a9760baf9331aae567"]
        },
        qa02: {
            url: "https://dev-qa02.dev.findora.org:8545",
            accounts: ["0x4d05b965f821ea900ddd995dfa1b6caa834eaaa1ebe100a9760baf9331aae567"]
        }
    }
};
