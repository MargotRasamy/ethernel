import Transaction from "./Transaction";
import { useEffect, useContext, useState } from 'react';
import { TransactionContext } from "../../context/TransactionContext";

const TransactionsList = () => {
    const { getTransactionsList, transactionsList, getTransactionsCount, transactionCount } = useContext(TransactionContext)

    useEffect(async () => {
        getTransactionsList()
        getTransactionsCount()
    }, []);

    return (
        <div className="transactions-list">
            
            { (!!transactionsList && transactionsList.length) ?
            
            transactionsList.map((transaction, index) => {
                return (
                    // <Transaction from="me" amount="500" to="you" key={transaction} date="hello" />
                    <Transaction from={transaction.sender} amount={transaction.amount} to={transaction.receiver} msg={transaction.msg} gif={transaction.gif} key={index} date={transaction.date} />
                )
            }) :
            <p>Waiting...</p> 
            }                       
        </div>
    )
}

export default TransactionsList;