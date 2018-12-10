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
  };

  signupClickHandler = () => {
    this.props.refreshAppModalState('Signup', true, 70, 85);
  }

  loginClickHandler = () => {
    this.props.refreshAppModalState('Login', true, 40, 60);
  };

  userClickHandler = () => {
    this.setState(prevState => ({
      redirect: !prevState.redirect,
    }));
  };

  homehandler = () => {
    this.props.history.push('/');
  };

  signoutClickHandler = () => {
    fetch('/api/v1/logout', {
      credentials: 'same-origin',
    }).then(() => {
      this.props.updateLoggingInfo();
      alertify.set('notifier', 'position', 'top-center');
      alertify.success('logged out successfuly');
      this.props.history.push('/');
    });
  };

  render() {
    const { redirect } = this.state;
    return (
      <div>
        {redirect && (
        <Redirect
          to={{
            pathname: '/dash',
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
              <li onClick={this.userClickHandler}>
                Hello
                {' '}
                {this.props.userInfo[0].first_name}
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
