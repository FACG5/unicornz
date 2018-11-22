import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import WorkExperienceList from './Pages/WorkExpList';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import WorkExperienceDetails from './Pages/WorkExpDetails';
import Category from './Pages/Category';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/dash" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/workexperiencedetails" component={WorkExperienceDetails} />
              <Route path="/category" component={Category} />
              <Route path="/workexperiencelist" component={WorkExperienceList} />
              <Route path="*" component={LandingPage} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}


export default App;
