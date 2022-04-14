import React, { Component } from "react";
// import {
//   Link
// } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";
import { useContext, useEffect, useState } from "react";

import ButtonLink from './ButtonLink';
import SimpleLink from './SimpleLink';
import BurgerMenu from "./BurgerMenu";
import ButtonSimple from "./ButtonSimple";

const Header = () => {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [open, setOpen] = useState(false);

     const { connectWallet, connectedAccounts } = useContext(TransactionContext)

    const setMenuState = (menuState) => {
        setOpen(menuState)
    }

    const updateDimensions = () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
   
        if (width >= 959) {
            setMenuState(false)
        }
    };

    const isConnected = () => {
        return !!connectedAccounts.length
    }

    const toConnect = () => {
        if (!isConnected()) { 
            connectWallet()
        }
    }

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);
    })

    return (
        <div className='header'>
                    <SimpleLink color="blue" wrapperClass="ethernel-font logo" toPath="/" text="Ethernel"/>
                    <BurgerMenu onClickAction={ ()=> { setMenuState(!open) } } />
                    <nav className={ !open ? 'closed' : '' }>
                        {/* <ButtonLink wrapperClass="nav-item" color="blue" toPath="/market" text="Market"/> */}
                        <ButtonLink wrapperClass="nav-item" color="blue" toPath="/NFT" text="NFT collection"/>
                        <ButtonLink wrapperClass="nav-item" color="blue" toPath="/transactions" text="Transactions"/>
                        <ButtonSimple onClickEvent={toConnect()} wrapperClass={"nav-item" + (isConnected() ? ' text-clip text-clip-size ' : '')} color="color"  text={isConnected() ? connectedAccounts[0] : 'Connect'} />
                    </nav>
        </div> 
    );
}


// class Header extends React.Component { 

//     state = { width: 0, 
//         height: 0, 
//         open: false };

//     setMenuState (menuState) {
//         this.state.open = this.setState({open: menuState})
//     }

//     updateDimensions = () => {
//         this.setState({ width: window.innerWidth, height: window.innerHeight });
//         if (this.state.width >= 959) {
//             console.log(this.state.width)
//             this.setMenuState(false)
//         }
//     };

//     componentDidMount() {
//         window.addEventListener('resize', this.updateDimensions);
//     }

//     componentWillUnmount() {
//         window.removeEventListener('resize', this.updateDimensions);
//     }

//     render () {
//         return (
//           <div className='header'>
//                     <SimpleLink color="blue" wrapperClass="ethernel-font logo" toPath="/" text="Ethernel"/>
//                     <BurgerMenu onClickAction={ ()=> { this.setMenuState(!this.state.open) } } />
//                     <nav className={ !this.state.open ? 'closed' : '' }>
//                         <ButtonLink wrapperClass="nav-item" color="blue" toPath="/market" text="Market"/>
//                         <ButtonLink wrapperClass="nav-item" color="blue" toPath="/exchange" text="Exchange"/>
//                         <ButtonLink wrapperClass="nav-item" color="blue" toPath="/wallet" text="Wallet"/>
//                         <ButtonLink wrapperClass="nav-item" color="color" toPath="/wallet" text="Connect"/>
//                     </nav>
        
//         </div>  
//         )
        
//     }
        
    
// } 
export default Header;