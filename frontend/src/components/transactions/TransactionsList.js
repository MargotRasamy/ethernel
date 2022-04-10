import Transaction from "./Transaction";
import { useEffect, useContext, useState } from 'react';
import { TransactionContext } from "../../context/TransactionContext";

const TransactionsList = () => {

    const [isLoading, setIsLoading] = useState(true)

    const { getTransactionsList, transactionsList } = useContext(TransactionContext)

    // const list = () => {
    //     const items = []
    

        
    //     return items;
    // }

    useEffect(async () => {
        const hello = await getTransactionsList()
        console.log("hell " + hello);
    });

    return (
        <div className="transactions-list">
            
            { (isLoading) ?
            <p>Waiting...</p> :
            
            transactionsList.map((transaction) => {
                return (
                    <Transaction from={transaction.sender} to={transaction.receiver} amount={transaction.amount} key={transaction.timestamp} date={transaction.timestamp} />
                )
            })
            }
                       
        </div>
    )
}

export default TransactionsList;