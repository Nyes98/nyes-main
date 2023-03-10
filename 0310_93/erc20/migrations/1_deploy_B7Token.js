const B7Token = artifacts.require("B7Token");

module.exports = function (deployer) {
  deployer.deploy(B7Token, "Block 7 Tokens", "BTS", 2023);
};
