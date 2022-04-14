import ButtonSimple from "../ButtonSimple";
import CryptoCard from "../CryptoCard";
import Form from "../Form";

import { TransactionContext } from "../../context/TransactionContext";
import { useContext } from "react";

const Hero = () => {

    const { connectWallet, connectedAccounts } = useContext(TransactionContext);

    const isConnected = () => {
      return !!connectedAccounts.length
    }

    // useEffect(() => {
    //   console.log(context)
    // }, []);
    return (
      <div className="hero">
        <div className="introduction">
          <h1 className="main-title">Ethernel</h1>
          <h2 className="main-description">Send Ethers to anyone in the world at anytime !</h2>
          <ButtonSimple wrapperClass="cta-button" color="color" onClickEvent={connectWallet} type="button" text={isConnected() ? connectedAccounts[0] : 'Connect wallet'} size="lg" />
        </div>
        <div className="crypto-form">
          <CryptoCard />
          <Form />
        </div>
        
        
      </div>
    );
  }
  
  export default Hero;