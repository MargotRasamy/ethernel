const TransactionInformation = (props) => {
    const { label, value } = props;
    return (
        <div className="transaction-information">
            <p className="label"><strong>{ label }</strong></p>
            <p className="value text-clip">{ value }</p>
        </div>
    );
}

export default TransactionInformation;