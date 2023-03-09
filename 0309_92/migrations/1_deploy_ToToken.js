const ToToken = artifacts.require("ToToken");

module.exports = function (deployer) {
  deployer.deploy(ToToken, "ToToken", "TOT", 2023);
};
