const celoKit = require("@celo/contractkit");
const celoNodeUrl = 'https://celo-alfajores.infura.io/v3/ad396f4f0be84ec3ad1fa8de5bdef7d0';

const kit = celoKit.newKit(celoNodeUrl);

//console.log("kit connected", kit)

//Create wallet generate
const generateWalletAddress = async () => {
    const account = await kit.web3.eth.accounts.create()
    console.log("account", account)
    return account
}

const walletAddress = '0xc7A9ef764766687B05E91dFf14d778021B8E3155'

//get cUsd balance
const getCUSDBalance = async (address) => {
    const tokenWrapper = kit.contracts.getGoldToken(); //celo

    const balance = await tokenWrapper.balanceOf(address);

    return balance
}