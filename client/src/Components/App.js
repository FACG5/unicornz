import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Rodal from 'rodal';
import axios from 'axios';
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import workExperienceDetails from './Pages/WorkExpDetails';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import workExperienceList from './Pages/WorkExpList';
import Category from './Pages/Category';
import Questionnaire from './Pages/Questionnaire';
import WorkExpFill from './Pages/workexpfill';

import '../../node_modules/rodal/lib/rodal.css';

import './App.css';

class App extends Component {
  state = {
    modalIsOpen: false,
    modal: '',
    loggedIn: 'loggedout',
    userInfo: null,
    modalWidth: 50,
    modalHeight: 50,
  };

  refreshAppModalState = (modal, modalIsOpen, modalWidth, modalHeight) => {
    this.setState({
      modal,
      modalIsOpen,
      modalWidth,
      modalHeight,
    });
  };

  updateLoggingInfo = () => {
    axios('/api/v1/updatehero', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).then((res) => {
      this.setState({ loggedIn: res.data.status, userInfo: res.data.token });
    }).catch((err) => {
      console.log('err', err);
    });
  };

  getModal = (Currentmodal) => {
    switch (Currentmodal) {
      case 'Login':
        return (
          <Login
            refreshAppModalState={this.refreshAppModalState}
            updateLoggingInfo={this.updateLoggingInfo}
          />
        );
      case 'Signup':
        return (
          <Signup
            refreshAppModalState={this.refreshAppModalState}
            updateLoggingInfo={this.updateLoggingInfo}
          />
        );
      default:
    }
  };

  componentWillMount() {
    this.updateLoggingInfo();
  }

  render() {
    const { id } = this.state.userInfo && this.state.userInfo[0] || {};
    const CurrentModal = this.state.modal;
    return (
      <div className="App">
        <BrowserRouter>
          <div className="app-main">
            <Header
              className="app-header"
              refreshAppModalState={this.refreshAppModalState}
              loggedIn={this.state.loggedIn}
              userInfo={this.state.userInfo}
              updateLoggingInfo={this.updateLoggingInfo}
            />

            <Rodal
              visible={this.state.modalIsOpen}
              onClose={() => this.setState({ modalIsOpen: false })}
              width={this.state.modalWidth}
              height={this.state.modalHeight}
              measure="%"
            >
              {this.getModal(CurrentModal)}
            </Rodal>

            <div className="app-content">
              <Switch>
                <Route exact path="/" render={() => <LandingPage id={id} />} />
                <Route exact path="/dash" render={() => <Dashboard id={id} updateLoggingInfo={this.updateLoggingInfo} />} />
                <Route path="/login" component={Login} />
                <Route
                  path="/workexperiencedetails/:id"
                  component={workExperienceDetails}
                />
                <Route path="/category" component={Category} />
                <Route
                  path="/workexperiencelist"
                  component={workExperienceList}
                />
                <Route exact path="/Questionnaire" render={() => <Questionnaire id={id} />} />
                <Route path="/WorkExpFill" component={WorkExpFill} />
                <Route path="*" component={LandingPage} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>

        <Footer className="app-footer" />
      </div>
    );
  }
}

export default App;
