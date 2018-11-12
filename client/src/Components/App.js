import React, { Component } from 'react';
import './App.css';
import CompanyContact from './Pages/WorkExpDetails/CompanyContact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <CompanyContact />
        </header>
      </div>
    );
  }
}

export default App;
