import React from 'react';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router';
import './style.css';
import alertify from 'alertifyjs';
import { CLIENT_RENEG_LIMIT } from 'tls';
import logo from './logo.png';

class HeaderComp extends React.Component {
  state = {
    redirect: false,
    id: 1,
  };

  signupClickHandler = () => {
    this.props.refreshAppModalState('Signup', true, 70, 85);
  }
  loginClickHandler = () => {
    console.log('prposssss', this.props);
    this.props.refreshAppModalState('Login', true, 40, 60);
  };
 
  userClickHandler = () => {
    const { id } = this.props.userInfo[0];
    this.setState(prevState => ({
      redirect: !prevState.redirect,
      id,
    }));
  };

  homehandler = () => {
    this.props.history.push('/');
  };

  signoutClickHandler = () => {
    fetch('/api/v1/logout').then(() => {
      this.props.updateLoggingInfo();
      alertify.set('notifier', 'position', 'top-center');
      alertify.success('logged out successfuly');
      this.props.history.push('/');
    });
  };

  render() {
    const { redirect, id } = this.state;
    return (
      <div>
        {redirect && (
          <Redirect
            to={{
              pathname: '/dash',
              state: { id },
            }}
          />
        )}

        <div className="header">
          <img
            className="header-img"
            src={logo}
            alt="logo"
            onClick={this.homehandler}
          />
          <ul className="header-nav">
            {this.props.loggedIn === 'loggedout' ? (
              <li onClick={this.loginClickHandler}> Login </li>
            ) : (
              <li onClick={this.userClickHandler} >
                Hello {this.props.userInfo[0].first_name}
              </li>
            )}
            {this.props.loggedIn === 'loggedout' ? (
              <li onClick={this.signupClickHandler}> Sign up </li>
            ) : (
              <li onClick={this.signoutClickHandler}>Sign out</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(HeaderComp);