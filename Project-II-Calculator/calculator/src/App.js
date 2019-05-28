import React from 'react';
import './App.scss';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayNumber: 0
    }
  }

  render() {
    return (
      <div className="calculator-app">
        <CalculatorDisplay displayValue={this.state.displayNumber} />
        <div className="button-area">
          <ActionButton function={this.clear} text="clear"/>
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
  }

  clear() {
    this.state.displayNumber = 0;
  }
}

export default App;
