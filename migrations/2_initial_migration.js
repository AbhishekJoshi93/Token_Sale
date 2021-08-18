var AbhiToken = artifacts.require("./AbhiToken.sol");
var AbhiTokenSale = artifacts.require("./AbhiTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(AbhiToken, 1000000).then(function(){
    var tokenPrice = 1000000000000000;
    return deployer.deploy(AbhiTokenSale, AbhiToken.address, tokenPrice);
  });
};