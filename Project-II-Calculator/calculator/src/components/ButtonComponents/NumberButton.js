import React from 'react';
import './Button.scss';

const NumberButton = props => {
  return (
    <button className={props.buttonStyle} onClick={ () => props.handleClick(props.text)} value={props.text}>{props.text}</button>
  );
}

export default NumberButton;