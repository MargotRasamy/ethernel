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
    return transactionContract;
}

export const TransactionProvider = ({ children }) => {
    const [isLoadingTransaction, setLoadingTransaction] = useState(false)
    const [transactionsList, setTransactionsList] = useState(localStorage.getItem('transactionsList') ? JSON.parse(localStorage.getItem('transactionsList')) :[])
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionsCount') ? JSON.parse(localStorage.getItem('transactionsCount')) :[])
    const [connectedAccounts, setConnectedAccounts] = useState([])
    const [formData, setFormData] = useState({
        addressTo: '',
        amount: '',
        gif: '',
        msg: ''
    })
    

    const handleChange = (e) => {
        setFormData((previousState) => ({
          ...previousState, 
          [e.target.name]: e.target.value
        }))
    }

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

    const structuredTransactions = (transactions) => {   
        return transactions.map((transaction) => {
            return {
                sender: transaction.sender,
                receiver: transaction.receiver,
                amount: parseInt(transaction.amount._hex) / (10 ** 18),
                date: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                msg: transaction.message,
                gif: transaction.keyword
            }
        })
    }

    const mock = () => {
        return [
            {
                sender: "me",
                receiver: "you",
                amount: "0.05",
                date: new Date().toLocaleString(),
                msg: "thank you",
                gif: "cool"
            },
            {
                sender: "me",
                receiver: "you",
                amount: "0.05",
                date: new Date().toLocaleString(),
                msg: "thank you",
                gif: "cool"
            },
            
        ]
    }

    const getTransactionsCount = async () => {
        const transactionContract = await getEthereumContract();
        const transactionsCount = await transactionContract.getTransactionCount();
        const formattedTransactionsCount = transactionsCount.toNumber();
        setTransactionCount(formattedTransactionsCount);
        localStorage.setItem('transactionsCount', JSON.stringify(formattedTransactionsCount));
    }

    const getTransactionsList = async () => {
        const transactionContract = await getEthereumContract();

        const allTransactions = await transactionContract.getAllTransactions();

        const formattedTransactions = structuredTransactions(allTransactions);

        console.log(formattedTransactions);
        setTransactionsList(formattedTransactions);
        localStorage.setItem('transactionsList', JSON.stringify(formattedTransactions));

        return formattedTransactions;
    }

    const sendTransaction = async () => {
        setLoadingTransaction(true)
        try {
            checkWalletInstalled();
            const transactionContract = await getEthereumContract();

            // parse the amount into gwei
            const parsedAmount = ethers.utils.parseEther(formData.amount);

            // This creates a transaction you can see on etherscan rinkedby 
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: connectedAccounts[0],
                    to: formData.addressTo,
                    // parse the gwei amount into hex
                    value: parsedAmount._hex, 
                    // Gas has to be in hexadecimal format. 
                    //To know the value, turn it into decimal to have gwei (10^8 gwei = 1 ether). 
                    //Here we chose in hexa : 0x5208 (21000 gwei)
                    // Gas is the price paid for validators. 
                    // It can be chosen by default if not specified
                    gas: '0x5208'
                }],
              });
        
            setLoadingTransaction(true)
            const transaction = await transactionContract.addToBlockchain(formData.addressTo, parsedAmount, formData.msg, formData.gif);
            console.log(`Loading ${transaction.hash}`)
            await transaction.wait();
            setLoadingTransaction(false)
            console.log(`Success ${transaction.hash}`)
        } catch (error) {
            console.log(error);
            console.log('No ethereum object.');

            // throw new Error('No ethereum object.')
        }
    }

    const checkConnectionOnReload = async () => {
        try {
            if (!ethereum) { alert('Please install metamask') };
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
        <TransactionContext.Provider value={{connectWallet, connectedAccounts, handleChange, formData, sendTransaction, getTransactionsList, transactionsList, getTransactionsCount, transactionCount}}>
            { children }
        </TransactionContext.Provider> 
    )
    
}