require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('@typechain/hardhat');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.13",
    networks: {
        hardhat: {},
        localhost: {
            url: "http://127.0.0.1:8545",
            accounts: ["0x4d05b965f821ea900ddd995dfa1b6caa834eaaa1ebe100a9760baf9331aae567"]
        },
        testnet: {
            url: "https://prod-testnet.prod.findora.org:8545",
            accounts: ["0x4d05b965f821ea900ddd995dfa1b6caa834eaaa1ebe100a9760baf9331aae567"]
        },
        qa02: {
            url: "https://dev-qa02.dev.findora.org:8545",
            accounts: ["0x4d05b965f821ea900ddd995dfa1b6caa834eaaa1ebe100a9760baf9331aae567"]
        },
        qa04: {
            url: "https://dev-qa04.dev.findora.org:8545",
            accounts: ["0x4d05b965f821ea900ddd995dfa1b6caa834eaaa1ebe100a9760baf9331aae567"]
        }
    }
};
