import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { withRouter } from 'react-router';
import alertify from 'alertifyjs';
import Button from '../../CommonComponents/Button';
import 'alertifyjs/build/css/themes/bootstrap.min.css';

export default withRouter(
  class LoginForm extends Component {
    state = {
      loginEmail: '',
      loginPassword: '',
    };

    onClickHandler = () => {
      fetch('/api/v1/login', {
        method: 'POST',
        body: JSON.stringify({
          loginEmail: this.state.loginEmail,
          loginPassword: this.state.loginPassword,
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
        .then(res => res.json())
        .then(res => {
          if (res.status) {
            alertify.set('notifier', 'position', 'top-center');
            alertify.success('logged in successfuly');
            this.props.refreshAppModalState(null, false);
            this.props.updateLoggingInfo();
          } else {
            alertify.set('notifier', 'position', 'top-center');
            alertify.error(res.msg);
          }
        });
    };

    componentDidMount() {
      this.setState({
        loginEmail: ReactDOM.findDOMNode(this.refs.emailinput).value,
        loginPassword: ReactDOM.findDOMNode(this.refs.passwordinput).value,
      });
    }

    emailOnKeyUp = e => {
      this.setState({ loginEmail: e.target.value });
    };

    passwordOnKeyUp = e => {
      this.setState({ loginPassword: e.target.value });
    };

    render() {
      return (
        <div className="loginComponent">
          <div className="login-card">
            <h1 className="login-title">Log In</h1>
            <input
              id="username"
              type="email"
              name="email"
              placeholder="email"
              ref="emailinput"
              onKeyUp={this.emailOnKeyUp}
              required
            />
            <input
              type="password"
              name="pass"
              id="password"
              placeholder="Password"
              ref="passwordinput"
              onKeyUp={this.passwordOnKeyUp}
            />
            <Button
              onClick={this.onClickHandler}
              className="login login-submit"
              id="login"
              value="login"
            />
          </div>
        </div>
      );
    }
  }
);
