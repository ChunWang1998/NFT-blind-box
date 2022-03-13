# NFT-blind-box

## key part
* mint NFT(by call function)
* metadata(ipfs)
* blind box 

## run and build

### run on rinkeby(remember check truffle-config.js)

```
npm install
sudo truffle migrate --reset --network rinkeby
truffle test --network rinkeby  
```

### run on ganache(remember check truffle-config.js)

```
npm install
sudo truffle migrate --reset
truffle test 
```

## refer

### deploy on rinkeby

https://gasolin.gitbooks.io/learn-ethereum-dapp/content/deploy-to-testnet.html

### test code

https://forum.openzeppelin.com/t/create-an-nft-and-deploy-to-a-public-testnet-using-truffle/2961

https://ethereum-blockchain-developer.com/120-erc721-supply-chain-aisthisi/05-unit-testing/

### mint NFT

https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/

### metadata + ipfs說明

https://yulinchou.medium.com/2021-%E5%BB%BA%E7%AB%8B-erc721-%E6%A8%99%E6%BA%96%E6%99%BA%E8%83%BD%E5%90%88%E7%B4%84-%E4%B8%A6%E6%89%93%E9%80%A0%E8%87%AA%E5%B7%B1%E7%9A%84-nft-99afaca68530 (中半段)

https://app.pinata.cloud/pinmanager

https://ethereum.org/en/developers/tutorials/how-to-mint-an-nft/

### blind box

https://www.frank.hk/blog/smart-contract-mystery-box/ 

## note

* 要先把圖片上傳到ipfs(pinata),得到ipfs url, 再把url放進 nft_metadata.json, 再將此份json上傳到ipfs,得到ipfs url,再放進mintNFT()
