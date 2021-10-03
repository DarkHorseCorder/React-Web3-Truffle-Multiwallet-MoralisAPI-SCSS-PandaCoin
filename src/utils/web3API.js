import Web3 from 'web3'
import contractAbi from '../config/abi.json'
import { toast } from 'react-toastify';

let Contract = require("web3-eth-contract");
Contract.setProvider("https://rpc-mainnet.maticvigil.com")

export const getWeb3 = async () => {//first connect the EVM and return web3 instance. always use!
    let web3;
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
    } else if (window.web3) {
        await window.web3.currentProvider.enable();
        web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log('No web3 instance detected.');
        return false;
    }
    return web3;
}

export const web3_handleBuybtn = async () => {
    const web3 = await getWeb3();
    if (!web3) {
        toast.error("No web3 instance found.");
        return false;
    }
    try {
        let extraMaticContract = new Contract(contractAbi, "0x2a2cf93bc92537a596e7956315ce914186d0242f" );//create instance of contract with abi and address
        const res = await extraMaticContract.methods.getSiteInfo().call()//get total staked money value
        let total_deposit = web3.utils.fromWei(res['_totalInvested'])
        // console.log("total_deposit" + res['_totalInvested'])
        return total_deposit 
       
    } catch (e) {
        return false;
    }
}
