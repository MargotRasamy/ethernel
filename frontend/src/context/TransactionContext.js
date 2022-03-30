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
    const [connectedAccounts, setConnectedAccounts] = useState([])
    // const [isConnected, setConnection] = useState(false)

    

    const connectWallet = async () => {
        try {
            checkWalletInstalled();
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setConnectedAccounts(accounts);  
            // setConnection(!!connectedAccounts.length);
            console.log(accounts)
        } catch (error) {
            console.log('No ethereum object.');
            // throw new Error('No ethereum object.')
        }
    }

    // const disconnectWallet = async function () {
    //     await window.ethereum.request({
    //         method: "wallet_requestPermissions",
    //         params: [{
    //             eth_accounts: {}
    //         }]
    //     });
    // }

    // const checkWalletConnected = () => {
    //     setConnection(!!connectedAccounts.length);
    // }

    const checkWalletInstalled = () => {
        if (!ethereum) { alert('Please install metamask') };
    }

    const checkConnectionOnReload = async () => {
        try {
            checkWalletInstalled();
            // const accounts = await ethereum.request({ method: 'eth_accounts' })
            // setConnectedAccounts(accounts)
            //getAllTransactions
            
            
        } catch (error) {
            console.log('No ethereum object.');
            // throw new Error('No ethereum object.')
        }
    }

    useEffect(() => {
        checkConnectionOnReload()
    }, [])

    return (
        <TransactionContext.Provider value={{connectWallet, connectedAccounts}}>
            { children }
        </TransactionContext.Provider> 
    )
    
}