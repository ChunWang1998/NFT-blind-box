# NFT-blind-box

賣方提供：圖片 / 特性 / 數量 

## key part
* mint NFT(by call function)
* metadata(ipfs)
* blind box 

## setting

(picture / metadata 可以參考refer)

### picture

檔名統一後存到 image 資料夾中,並上傳到 https://app.pinata.cloud/pinmanager, 拿到一組cid(A_cid)

### metadata

在 hashlips_art_engine 執行：

```
npm install
```

並設置一些參數:

*  name: src/config.js -> namePrefix
*  description: src/config.js -> description
*  image: src/config.js -> baseUri ( 後面要放的是存picture 得到的cid(A_cid) )
*  attribute: src/config.js -> layerConfigurations 
*  metadata: src/main.js -> addMetadata

```
node index.js
```

生成 build/ json ,此份資料夾上傳到pinata, 得到另一組cid (B_cid),當作要寫進合約的_initBaseURI

## run and build

改 2_token_test.js 的 nft 參數, url 拿 B_cid 來寫入

### run on ganache(remember check truffle-config.js)

```
npm install
sudo truffle migrate --reset
truffle test 
```

### run on rinkeby(remember check truffle-config.js)

```
npm install
sudo truffle migrate --reset --network rinkeby
truffle test --network rinkeby  
```

### run on ropsten(remember check truffle-config.js)

```
npm install
sudo truffle migrate --reset --network ropsten
truffle test --network ropsten  
```

## refer

### deploy on rinkeby

https://gasolin.gitbooks.io/learn-ethereum-dapp/content/deploy-to-testnet.html

### test code

https://forum.openzeppelin.com/t/create-an-nft-and-deploy-to-a-public-testnet-using-truffle/2961

https://ethereum-blockchain-developer.com/120-erc721-supply-chain-aisthisi/05-unit-testing/

### generate metadata and upload to ipfs, then get tokenurl, then mint NFT 

(如果已經有圖片,可以略過製作圖片的部分,直接將命名好的圖片放進資料夾並丟進ipfs即可)
(要注意pinata 有大小限制,若要更大則需付費)

https://www.youtube.com/watch?v=3jizwk6_m1s

### blind box

#### detailed example

https://ithelp.ithome.com.tw/users/20140105/ironman/3939

#### easy example 

https://www.frank.hk/blog/smart-contract-mystery-box/ 

https://mirror.xyz/0x6996B6Af0EC5d185408B42B8EA64b4ad09209414/IAusgeO6hJDHmyNxoGHfwigeVnS7nUIWgob7aYo-7bA

#### complicate example

https://github.com/BlindBoxesNFT/blindboxes-contracts

https://github.com/wighawag/mystery-box

https://github.com/DimensionDev/MysteryBox

## note

### generate metadata and upload to ipfs, then get tokenurl, then mint NFT 
* 先將圖片全部丟到ipfs (可能要寫一份script),然後要拿到ipfs url
* 將得到的這些ipfs url再丟進 metadata image裏面,生成另一串 ipfs url(也要寫一份script,和上一份合在一起寫)
