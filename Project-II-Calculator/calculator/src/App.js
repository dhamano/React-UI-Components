import React from 'react';
import './App.scss';
import * as math from 'mathjs';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      evaled: false
    }
  }

  addInput = value => {
    if(this.state.input === "0" || (this.state.evaled && ['÷', '×', '-', '+', '='].indexOf(value) < 0)) {
      if(this.state.evaled) { this.setState({evaled: false}); }
      this.setState({input: value});
    } else {
      if(this.state.evaled) { this.setState({evaled: false}); }
      this.setState({input: this.state.input + value});
    }
  }

  equalEval = () => {
    let tempStringHolder = this.state.input
    tempStringHolder = tempStringHolder.replace(/×|÷/gi, x => {
      if(x === "×") { return x = "*" }
      if(x === "÷") { return x = "/" }
    });
    this.setState({input: math.eval(tempStringHolder)});
    this.setState({evaled: true});
  }

  handleMultiply = val => {
    if(val==="x") {
      this.setState({input: this.state.input + val.replace('×', "*")});
    }
  }

  render() {
    return (
      <div className="calculator-app">
        <CalculatorDisplay displayValue={this.state.input} />
        <div className="button-area">
          <ActionButton handleClick={() => this.setState({input: "0"})} text="clear"/>
          <NumberButton text="÷" handleClick={this.addInput} buttonStyle="operator" />
          <NumberButton text="7" handleClick={this.addInput} />
          <NumberButton text="8" handleClick={this.addInput} />
          <NumberButton text="9" handleClick={this.addInput} />
          <NumberButton text="×" handleClick={this.addInput} buttonStyle="operator" />
          <NumberButton text="4" handleClick={this.addInput} />
          <NumberButton text="5" handleClick={this.addInput} />
          <NumberButton text="6" handleClick={this.addInput} />
          <NumberButton text="-" handleClick={this.addInput} buttonStyle="operator" />
          <NumberButton text="1" handleClick={this.addInput} />
          <NumberButton text="2" handleClick={this.addInput} />
          <NumberButton text="3" handleClick={this.addInput} />
          <NumberButton text="+" handleClick={this.addInput} buttonStyle="operator" />
          <ActionButton text="0" handleClick={this.addInput} />
          <NumberButton text="=" handleClick={this.equalEval} buttonStyle="operator" />
        </div>
      </div>
    );
  }
}

export default App;
