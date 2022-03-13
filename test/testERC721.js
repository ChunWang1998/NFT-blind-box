var MyNFT = artifacts.require('MyNFT');

contract('MyNFT', async function (accounts) {
    before(async () => {
        MyNFT = await MyNFT.deployed();
        console.log("Contract deployed to address:", MyNFT.address)
    });

    describe("NFT basic test", async () => {
        it('check NFT name', async () => {
            let name = await MyNFT.name();
            console.log("NFT name is: " + name);
        });

        it('check NFT symbol', async () => {
            let symbol = await MyNFT.symbol();
            console.log("NFT symbol is: " + symbol);
        });

        it('check NFT tokenURI', async () => {
            await MyNFT.mintNFT("0x8CE6aC2AE2dDBc6B35156220f6fF1917f6Ca6dcf", "https://gateway.pinata.cloud/ipfs/Qmb2Y86c2trbQosvy4MNsDwxCQYL5VSABRufNa14ZuY8rp")
            await MyNFT.mintNFT("0x8CE6aC2AE2dDBc6B35156220f6fF1917f6Ca6dcf", "https://gateway.pinata.cloud/ipfs/Qmb2Y86c2trbQosvy4MNsDwxCQYL5VSABRufNa14ZuY8rp")
            await MyNFT.mintNFT("0x8CE6aC2AE2dDBc6B35156220f6fF1917f6Ca6dcf", "https://gateway.pinata.cloud/ipfs/Qmb2Y86c2trbQosvy4MNsDwxCQYL5VSABRufNa14ZuY8rp")
            let tokenURI = await MyNFT.tokenURI(1);
            console.log("NFT tokenURI: " + tokenURI);
        });

 

        // it('mint multiple NFT', async () => {
        //     await MyNFT.mintMultipleNFT("0x8CE6aC2AE2dDBc6B35156220f6fF1917f6Ca6dcf", 15)
        //     let owner = await MyNFT.ownerOf(14);
        //     console.log("NFT owner: " + owner);
        // });

    });
});

