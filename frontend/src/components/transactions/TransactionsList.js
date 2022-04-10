import Transaction from "./Transaction";
import { useEffect, useContext, useState } from 'react';
import { TransactionContext } from "../../context/TransactionContext";

const TransactionsList = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [transactionsList, setTransactionsList] = useState([2,3,4,2])

    const { getTransactionsList } = useContext(TransactionContext)

    useEffect(async () => {
        const hello = await getTransactionsList()
        setTransactionsList(hello);
        setIsLoading(false);
        console.log("hell " + hello);
    }, []);

    const list = 
        transactionsList.map((transaction, index) => {
            return (
                // <Transaction from="me" amount="500" to="you" key={transaction} date="hello" />
                <Transaction from={transaction.sender} amount={transaction.amount} to={transaction.receiver} msg={transaction.msg} gif={transaction.gif} key={index} date={transaction.date} />
            )
        })
    

    return (
        <div className="transactions-list">
            
            { (isLoading) ?
            <p>Waiting...</p> :
            list
            
            }
                       
        </div>
    )
}

export default TransactionsList;