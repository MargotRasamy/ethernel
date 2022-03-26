import React from "react";

const ButtonSimple = ({color, text, wrapperClass, onClickEvent}) => {
    return (
        <button type="button" onClick={onClickEvent} className={'button button-simple ' + 'button-' +color + ' ' + wrapperClass}>
           { text }
        </button>
    )
} 
export default ButtonSimple;