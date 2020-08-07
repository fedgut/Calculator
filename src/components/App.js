import React, { Component } from 'react';
import ButtonPanel from './buttonPanel';
import Display from './display';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() = {
  this.state({
      
    })
  }

  render() {
    return (
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
