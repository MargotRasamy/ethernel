import React from "react";
// import {
//   Link
// } from "react-router-dom";

import Button from './Button';
import SimpleLink from './SimpleLink';
const Header = () => {
    return (
        <div className='header'>
            <SimpleLink color="blue" wrapperClass="ethernel-font logo" toPath="/" text="Ethernel"/>
            <nav>
                <Button color="blue" toPath="/market" text="Market"/>
                <Button color="blue" toPath="/exchange" text="Exchange"/>
                <Button color="blue" toPath="/wallet" text="Wallet"/>
                <Button color="color" toPath="/wallet" text="Connect"/>
            </nav>
            
 
        </div>
    )
} 
export default Header;