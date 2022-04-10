const Transaction = (props) => {

    const { from, to, amount, date, wrapperClass } = props;
    return (
        <div className={"transaction " + wrapperClass}>
            <p>From : { from }</p>
            <p>To : { to }</p>
            <p>Amount : { amount }</p>
            <p>Date : { date } </p>
        </div>
    )
}

export default Transaction;