import TransactionInformation from './TransactionInformation'

const Transaction = (props) => {

    const { from, to, amount, date, msg, image, wrapperClass } = props;

    const transactionInfos = [
      {
        label: 'From :',
        value: from
      },
      {
        label: 'To :',
        value: to
      },
      {
        label: 'Amount :',
        value: amount
      },
      {
        label: 'Date :',
        value: date
      }
    ]

    return (
        <div className={"transaction " + wrapperClass} 
        // style={{backgroundImage: `url(${image})`}}
        >
            <div className="informations">
                {
                  transactionInfos.map((transaction, index) => {
                    return <TransactionInformation key={index} className="transaction-information" label={transaction.label} value={transaction.value} />
                  })
                }
            </div>
            <div className="image-container">
                <img src={image} alt="transaction-image" />
            </div>
            <div className="message">
                <p className="word-break"><strong>Message :</strong> { msg } </p>
            </div>
        </div>
        
    )
}

export default Transaction;