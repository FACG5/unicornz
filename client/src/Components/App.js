import React, { Component } from 'react';
import './App.css';
import HeaderComp from './CommonComponents/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <HeaderComp />
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
