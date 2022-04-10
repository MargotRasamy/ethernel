const Transaction = (props) => {

    const { from, to, amount, date, msg, gif, wrapperClass } = props;
    return (
        <div className={"transaction " + wrapperClass}>
            <div className="informations">
                <div className="information-text">
                  <p className="label"><strong>From :</strong></p>
                  <p className="value text-clip">{ from }</p>
                </div>
                <div className="information-text">
                  <p className="label"><strong>To :</strong></p>
                  <p className="value text-clip">{ to }</p>
                </div>
                <div className="information-text">
                  <p className="label"><strong>Amount :</strong></p>
                  <p className="value text-clip">{ amount }</p>
                </div>
                <div className="information-text">
                  <p className="label"><strong>Date :</strong></p>
                  <p className="value text-clip">{ date }</p>
                </div>
            </div>
            <div className="message">
                <p className="word-break"><strong>Message :</strong> { msg } </p>
            </div>
        </div>
        
    )
}

export default Transaction;