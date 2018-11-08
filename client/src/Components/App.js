import React, { Component } from 'react';
import './App.css';
import HeaderComp from './CommonComponents/Header';
import FooterComp from './CommonComponents/Footer';
import HeroSection from './Pages/LandingPage/HeroSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <HeaderComp />
 
        </header>
        <HeroSection/>
        
        <FooterComp />
      </div>
    );
  }
}

export default App;
