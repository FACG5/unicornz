import React, { Component } from 'react';
import './App.css';
import WorkExperienceView from './Components/Pages/WorkExpDetails/WorkExpView';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <WorkExperienceView />
        </header>
      </div>
    );
  }
}

export default App;
