import Ethereum from '../assets/images/ethereum.png'

const CryptoCard = () => {
    return (
        <div className="crypto-card">
            
            <div className="image-wrapper">
                <img src={Ethereum} />
            </div>
            <h5>0xfef34.....34f2e</h5>
            <h4>Ethereum card</h4>
        </div>
    )
}

export default CryptoCard;