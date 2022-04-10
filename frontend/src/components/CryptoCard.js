import Ethereum from '../assets/images/ethereum.png'
import { useContext, useEffect, useRef } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { VanillaTilt } from '../utils/CardTilt';

const CryptoCard = () => {
    const { connectedAccounts } = useContext(TransactionContext);

    const isConnected = () => {
        return !!connectedAccounts.length
    }

    useEffect(() => {
        VanillaTilt.init(document.querySelector(".crypto-card"), {
            max: 25,
            speed: 350,
            glare: true,
            "max-glare": 0.2
        });
    }, []);

    return (
        <div className="crypto-card" data-tilt>
            
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