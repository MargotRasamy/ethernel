import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = React.createContext();

// destructuring window.ethereum
const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    // Address of the wallet of deployed the contract
    const signer = provider.getSigner();
    // get the transaction contract
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })

    
}


export const TransactionProvider = ({ children }) => {

    const [connectedAccount, setConnectedAccount] = useState('')

    const fetchConnectedAccounts = async () => {
        return await ethereum.request({ method: 'eth_accounts' });
    }

    const connectWallet = async () => {
        try {
            checkWalletInstalled();
            const allAccountsList = await ethereum.request({ method: 'eth_requestAccounts' });
            setConnectedAccount(allAccountsList[0]);
        } catch (error) {
            console.log(error);
        }
    }

    const checkWalletInstalled = () => {
        if (!ethereum) { alert('Please install metamask') };
    }

    // useEffect(() => {
    //     checkWalletInstalled();
    // }, [])

    return (
        <TransactionContext.Provider value={{connectWallet}}>
            { children }
        </TransactionContext.Provider> 
    )
    
}