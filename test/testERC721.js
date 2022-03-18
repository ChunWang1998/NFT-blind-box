var NFT = artifacts.require('NFT');

contract('NFT', async function (accounts) {
    before(async () => {
        NFT = await NFT.deployed();
        console.log("Contract deployed to address:", NFT.address)
    });

    describe("NFT basic test", async () => {
        // it('check NFT name', async () => {
        //     let name = await NFT.name();
        //     console.log("NFT name is: " + name);
        // });

        // it('check NFT symbol', async () => {
        //     let symbol = await NFT.symbol();
        //     console.log("NFT symbol is: " + symbol);
        // });

        // it('check NFT tokenURI', async () => {
        //     let tokenURI1 = await NFT.tokenURI(1);
        //     console.log("NFT tokenURI1: " + tokenURI1);

        //     let tokenURI3 = await NFT.tokenURI(3);
        //     console.log("NFT tokenURI3: " + tokenURI3);
        // });

        it('mint multiple NFT', async () => {
            await NFT.mint("0x8CE6aC2AE2dDBc6B35156220f6fF1917f6Ca6dcf", 3)
            let owner = await NFT.ownerOf(2);
            console.log("NFT owner: " + owner);

            let tokenURI2 = await NFT.tokenURI(2);
            console.log("NFT tokenURI2: " + tokenURI2);
            await NFT.setBlindBoxOpened(true);
            tokenURI2 = await NFT.tokenURI(2);
            console.log("NFT tokenURI2: " + tokenURI2);
        });

    });
});

