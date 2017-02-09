import React, { Component } from 'react';
import './App.min.css';
import math from 'mathjs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operations : [],
    }
  }

  addToOperations(value){
    this.setState({
      operations: this.state.operations.concat([value]),
    });
  }

  resetOperations(){
    this.setState({
      operations: []
    })
  }

  handleClick(value) {
    if (this.state.operations == false) {
      if(value === "-" || value === "+" || value === "*" || value === "/") {
        this.resetOperations()
      } else {
        if(value === "clear") {
          this.resetOperations()
        } else {
          this.addToOperations(value)
        }
      }
    } else {
      if(value === "clear") {
        this.setState({
          operations: []
        })
      } else if (this.state.operations[0] === "." && this.state.operations.length === 1) {
          if (value === "/" || value === "*" || value === "+" || value === "-") {
          } else {
              this.addToOperations(value)
            }
      } else {
          this.addToOperations(value)
      }
    }
  }

  calculateOperations() {
    var result = this.state.operations.join("")
    result = String(math.eval(result))
    this.setState({
      operations: [result]
    })
  }

  render() {
    return (
      <div className="App">
        <Screen operators={this.state.operations}/>
        <div className="calculator">
          <button type="button" className="button button-ac" onClick={() => this.handleClick("clear")} label="AC" value="clear">AC</button>
          <button type="button" className="button symbol" onClick={() => this.handleClick("/")}  label="/" value="/">/</button>

          <button type="button" className="button" onClick={() => this.handleClick("7")}  label="7" value="7">7</button>
          <button type="button" className="button" onClick={() => this.handleClick("8")}  label="8" value="8">8</button>
          <button type="button" className="button" onClick={() => this.handleClick("9")}  label="9" value="9">9</button>
          <button type="button" className="button symbol" onClick={() => this.handleClick("*")}  label="x" value="*">x</button>

          <button type="button" className="button" onClick={() => this.handleClick("4")}  label="4" value="4">4</button>
          <button type="button" className="button" onClick={() => this.handleClick("5")}  label="5" value="5">5</button>
          <button type="button" className="button" onClick={() => this.handleClick("6")}  label="6" value="6">6</button>
          <button type="button" className="button symbol" onClick={() => this.handleClick("-")}  label="-" value="-">-</button>

          <button type="button" className="button" onClick={() => this.handleClick("1")}  label="1" value="1">1</button>
          <button type="button" className="button" onClick={() => this.handleClick("2")}  label="2" value="2">2</button>
          <button type="button" className="button" onClick={() => this.handleClick("3")}  label="3" value="3">3</button>
          <button type="button" className="button symbol" onClick={() => this.handleClick("+")}  label="+" value="+">+</button>

          <button type="button" className="button button-0" onClick={() => this.handleClick("0")}  label="0" value="0">0</button>
          <button type="button" className="button" onClick={() => this.handleClick(".")}  label="." value=".">.</button>
          <button type="button" className="button symbol" onClick={() => this.calculateOperations()}  label="=" value="equal">=</button>
        </div>
      </div>
    );
  }
}

class Screen extends React.Component {
  render() {
    return (
      <div className="screen-div">
        <div className="display">{this.props.operators}</div>
      </div>
    )
  }
}


export default App;
