import Transaction from "./Transaction";
import { useEffect, useContext, useState } from 'react';
import { TransactionContext } from "../../context/TransactionContext";
import { fetchImage } from "../../requests/APIFetchImages";
import LoaderSpinner from "../LoaderSpinner";
 
const TransactionsList = () => {
    const [transactionImagesUrl, setTransactionImagesUrl] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { getTransactionsList, transactionsList, getTransactionsCount, transactionCount, contract } = useContext(TransactionContext)
    
    
    const fetchTransactionImages = (liste) => {
        return liste.map(async (transac) => {
            const result = await fetchImage(transac.gif)
            return result.results[2].urls.regular
        })
    }

    useEffect(async () => {
        const liste = await getTransactionsList()
        console.log(liste)
        const images = await fetchTransactionImages(liste)

        Promise.all(images).then((results) => {
            setTransactionImagesUrl(results)
        }).catch((e) => {
            console.log("error ", e)
        });
    }, []);

    useEffect(() => {
        return () => setIsLoading(false)
    }, [transactionImagesUrl]);

    return (
        <div className="transactions-list">
            { 
                (!isLoading) ?
                transactionsList.map((transaction, index) => {
                    return (
                        // <Transaction from="me" amount="500" to="you" key={transaction} date="hello" />
                        <Transaction from={transaction.sender} image={transactionImagesUrl[index]} amount={transaction.amount} to={transaction.receiver} msg={transaction.msg} gif={transaction.gif} key={index} date={transaction.date} />
                    )
                }) :
                <div>
                    <h1>Loading...</h1>
                    <LoaderSpinner />
                </div>   
            }
        </div>
    )
}

export default TransactionsList;