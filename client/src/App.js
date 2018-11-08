import React, { Component } from 'react';
import './App.css';
import CardComp from './Components/Pages/WorkExpList/Cards';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <CardComp />
        </header>
      </div>
    );
  }
}

export default App;
