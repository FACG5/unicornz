import React, { Component } from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Hero from './Pages/LandingPage/HeroSection';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Signup from '../Components/Pages/SignUp';


import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Header />
      <BrowserRouter>
       <div>
       <Route exact path="/" component={Hero} />
       <Route path="/dash" component={Dashboard}/>
       <Route path="/signup" component={Signup}/>
       <Route path="*" component={Hero} />
       </div>
      </BrowserRouter>
      <Footer />
      </div>
    );
  }
}


export default App;
