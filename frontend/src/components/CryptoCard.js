import Ethereum from '../assets/images/ethereum.png'
import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const CryptoCard = () => {

    const { connectedAccounts } = useContext(TransactionContext);

    const isConnected = () => {
        return !!connectedAccounts.length
    }
    return (
        <div className="crypto-card">
            
            <div className="image-wrapper">
                <img src={Ethereum} />
            </div>
            {
                isConnected() ?
                <h5 className='text-clip'>{connectedAccounts[0]}</h5> :
                <h5>No card connected</h5>
            }
            
            <h4>Ethereum card</h4>
        </div>
    )
}

export default CryptoCard;