import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => {
  return (
    <div className="display">{props.displayValue}</div>
  );
  
}

export default CalculatorDisplay;