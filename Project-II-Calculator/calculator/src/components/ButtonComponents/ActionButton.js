import React from 'react';
import './Button.scss';

const ActionButton = props => {
  return (
    <button className="action">{props.text}</button>
  );
}

export default ActionButton;