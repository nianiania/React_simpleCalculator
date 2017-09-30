import React, { Component } from 'react';
import './App.css';
import Calculator from '../components/calculator/calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/><br/>
        <Calculator/>
      </div>
    );
  }
}

export default App;
