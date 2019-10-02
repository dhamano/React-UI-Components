import React from 'react';
import './App.scss';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator-app">
      <CalculatorDisplay />
      <div className="button-area">
        <ActionButton text="clear"/>
        <NumberButton text="÷" buttonStyle="operator" />
        <NumberButton text="7" />
        <NumberButton text="8" />
        <NumberButton text="9" />
        <NumberButton text="×" buttonStyle="operator" />
        <NumberButton text="4" />
        <NumberButton text="5" />
        <NumberButton text="6" />
        <NumberButton text="-" buttonStyle="operator" />
        <NumberButton text="1" />
        <NumberButton text="2" />
        <NumberButton text="3" />
        <NumberButton text="+" buttonStyle="operator" />
        <ActionButton text="0" />
        <NumberButton text="=" buttonStyle="operator" />
      </div>
    </div>
  );
};

export default App;
