import React, { Component } from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Hero from './Pages/LandingPage/HeroSection';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer'
import WorkExperienceList from './Pages/WorkExpList';
import Signup from '../Components/Pages/SignUp';
import Login from '../Components/Pages/Login';

import workExperienceDetails from '../Components/Pages/WorkExpDetails';
import Category from '../Components/Pages/Category';

import './App.css';
import workExperienceList from './Pages/WorkExpList';

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
       <Route path="/login" component={Login}/>
       <Route path="/workexperiencedetails" component={workExperienceList}/>
       <Route path="/category" component={Category}/>
       <Route path="/workexperiencelist" component={workExperienceDetails}/>
       </div>
      </BrowserRouter>
      <Footer />
      </div>
    );
  }
}


export default App;
