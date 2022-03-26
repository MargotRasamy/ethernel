import React from "react";
import App from '../App'
import { NavLink } from "react-router-dom";

const Button = ({color, text, toPath, wrapperClass}) => {
    return (
        <NavLink to={toPath} className={'button ' + 'button-' +color + ' ' + wrapperClass}>
           { text }
        </NavLink>
    )
} 
export default Button;