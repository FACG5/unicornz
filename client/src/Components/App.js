import React, { Component } from 'react';
import HeaderComp from './CommonComponents/Header';
import FooterComp from './CommonComponents/Footer';
import HeroSection from './Pages/LandingPage/HeroSection';
import Questionnaier from './Pages/Questionnaire';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <HeaderComp />
 
        </header>
        <HeroSection/>
        <Questionnaier />
        <FooterComp />
      </div>
    );
  }
}

export default App;
