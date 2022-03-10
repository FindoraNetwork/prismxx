const { expect } = require("chai");
const { ethers } = require("hardhat");
const deploy = require("../scripts/libdeploy");

describe("PrismXX", function () {
    it("Deploy contract", async function () {
        await deploy.deploy(ethers);
    });
});
