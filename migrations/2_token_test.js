const NFT = artifacts.require("NFT");

module.exports = function (deployer) {
  deployer.deploy(NFT,
    "lovelyDog",//name
    "lovelyDog",//symbol
    "ipfs://QmZagtmqKuX3UwdD6fBTqbzeM9UZN6tTLLgWeG9F4S3aw4/");//url, replace the cid 
};
