import React, { Component } from "react";
// import {
//   Link
// } from "react-router-dom";

import ButtonLink from './ButtonLink';
import SimpleLink from './SimpleLink';
import BurgerMenu from "./BurgerMenu";

class Header extends React.Component {

    state = { width: 0, 
        height: 0, 
        open: false };

    setMenuState (menuState) {
        this.state.open = this.setState({open: menuState})
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if (this.state.width >= 959) {
            this.setMenuState(false)
        }
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render () {
        return (
          <div className='header'>
                    <SimpleLink color="blue" wrapperClass="ethernel-font logo" toPath="/" text="Ethernel"/>
                    <BurgerMenu onClickAction={ ()=> { this.setMenuState(!this.state.open) } } />
                    <nav className={ !this.state.open ? 'closed' : '' }>
                        <ButtonLink wrapperClass="nav-item" color="blue" toPath="/market" text="Market"/>
                        <ButtonLink wrapperClass="nav-item" color="blue" toPath="/exchange" text="Exchange"/>
                        <ButtonLink wrapperClass="nav-item" color="blue" toPath="/wallet" text="Wallet"/>
                        <ButtonLink wrapperClass="nav-item" color="color" toPath="/wallet" text="Connect"/>
                    </nav>
        
        </div>  
        )
        
    }
        
    
} 
export default Header;