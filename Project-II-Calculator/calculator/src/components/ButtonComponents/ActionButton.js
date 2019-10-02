import React from 'react';
import './Button.scss';

const ActionButton = props => {
  return (
    <button className="action" onClick={ () => props.handleClick(props.text)} value={props.text}>{props.text}</button>
  );
}

export default ActionButton;