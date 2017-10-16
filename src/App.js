import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      potato: 2,
    };
  }
  increment = () => {
    this.setState({
      potato: this.state.potato+1,
    });
  }
  decrement = () => {
    this.setState({
      potato: (this.state.potato-1 < 0) ? 0 : this.state.potato-1,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          We have {this.state.potato} potatoes.
        </p>
        <p>
          <button onClick={this.increment}>More Potatoes!</button>
          <button onClick={this.decrement}>Less Potatoes!</button>
        </p>
      </div>
    );
  }
}

export default App;
