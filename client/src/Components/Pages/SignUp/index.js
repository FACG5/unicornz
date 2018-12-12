/* eslint-disable default-case */
import React, { Component } from 'react';
import alertify from 'alertifyjs';
import Select from 'react-select';

import './style.css';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default class SignUpForm extends Component {
    state = {
      first_name: null,
      last_name: null,
      email: null,
      school_id: null,
      other_school: null,
      birthdate: null,
      password: null,
      cpassword: null,
      checkUser: false,
      vx: 7,
      vy: 1,
      sum: 0,
      school_options: [],
      errorMessage: '',
      passwordStrength: '',
      passValidate: 'hide-check',
    }


    componentWillMount() {
      this.setState({ vx: Math.floor(Math.random() * 100), vy: Math.floor(Math.random() * 100) });
      fetch('/api/v1/getschoolslist').then(res => res.json())
        .then(res => this.setState({ school_options: res }));
    }

    measureStrength = (password) => {
      let score = 0;
      let passwordStrength;
      const regexPositive = [
        '[A-Z]',
        '[a-z]',
        '[0-9]',
        '\\W',
      ];
      regexPositive.forEach((regex, index) => {
        if (new RegExp(regex).test(password)) {
          score += 1;
        }
      });
      switch (score) {
        case 0:
        case 1:
          passwordStrength = 'weak: ';
          break;
        case 2:
        case 3:
          passwordStrength = 'good: ';
          break;
        case 4:
        case 5:
          passwordStrength = 'strong: ';
          break;
      }
      this.setState({
        passwordStrength,
        passValidate: 'show-check',
      });
    }

    validate = (e) => {
      const password = e.target.value;
      let errorMessage;
      let capsCount; let smallCount; let numberCount; let
        symbolCount;
      if (password.length < 8) {
        this.setState({
          errorMessage: 'password must be min 8 char',
          passValidate: 'show-check',
        });
      } else {
        capsCount = (password.match(/[A-Z]/g) || []).length;
        smallCount = (password.match(/[a-z]/g) || []).length;
        numberCount = (password.match(/[0-9]/g) || []).length;
        symbolCount = (password.match(/\W/g) || []).length;
        if (capsCount < 1) {
          errorMessage = 'must contain caps';
        } else if (smallCount < 1) {
          errorMessage = 'must contain small';
        } else if (numberCount < 1) {
          errorMessage = 'must contain number';
        } else if (symbolCount < 1) {
          errorMessage = 'must contain symbol';
        }
        this.setState({
          errorMessage,
          passValidate: 'show-check',
        });
        this.measureStrength(password);
      }
    }


    handlePassChange = (e) => {
      this.validate(e);
      this.setState({ password: e.target.value });
    }

    onSubmitClickHandler = () => {
      if (!this.state.first_name || this.state.first_name.trim() === '') {
        alertify.dialog('alert').set({ transition: 'fade', message: 'Please enter your first name' }).setHeader('<h3>No first name!</h3>').show();
      } else if (!this.state.last_name || this.state.last_name.trim() === '') {
        alertify.dialog('alert').set({ transition: 'fade', message: 'Please enter your last name' }).setHeader('<h3>No last name!</h3>').show();
      } else if (!this.state.email || this.state.email.trim() === '' || !validateEmail(this.state.email)) {
        alertify.dialog('alert').set({ transition: 'fade', message: 'Please enter a valid E-mail' }).setHeader('<h3>No email!</h3>').show();
      } else if (!this.state.school_id) {
        alertify.dialog('alert').set({ transition: 'fade', message: 'Please chose your school' }).setHeader('<h3>No school!</h3>').show();
      } else if (this.state.password !== this.state.cpassword) {
        alertify.dialog('alert').set({ transition: 'fade', message: 'Passwords do not match!' }).setHeader('<h3>check password</h3>').show();
      } else if (!this.state.password || this.state.password.trim() === '') {
        alertify.dialog('alert').set({ transition: 'fade', message: 'Please enter a password' }).setHeader('<h3>No password!</h3>').show();
      } else if ((this.state.sum === this.state.vx + this.state.vy) && this.state.checkUser) {
        fetch('/api/v1/signup', {
          method: 'POST',
          body: JSON.stringify({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            school_id: this.state.school_id.value,
            birthdate: this.state.birthdate,
            password: this.state.password,
          }),
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          credentials: 'same-origin',
        }).then(res => res.json())
          .then((res) => {
            if (res.status === true) {
              alertify.alert()
                .setting({
                  label: 'Ok',
                  message: 'Hello ,Welcome to Unicornz.Our mission here is to help you achieve the creative confidence to be the very best you can, in whatever field you choose, and to take your place amongst the future creators, leaders and business founders of the world you want to see.Unicornz will connect you to people and companies who, combined with our programmes and work experience initiatives, will help you explore your skills and hobbies in the future of work.My advice to you, Azara? Take every opportunity you can. Even those you think may not be of interest. Note down your likes and your dislikes and gradually you will start creating your unique path to your unique working future.Enjoy your journey,Marie-Clare',
                  onok() { window.location = '/Questionnaire'; },
                }).show();
              this.props.refreshAppModalState(null, false);
              this.props.updateLoggingInfo();
            } else {
              alertify.set('notifier', 'position', 'top-center');
              alertify.error('Signup failed');
            }
          }).catch((err) => {
            console.log('error', err);
          });
      } else {
        alertify.dialog('alert').set({ transition: 'fade', message: 'Please answer the question and check the "I am not a robot" check box' }).setHeader(`<h3>Hi, ${(this.state.first_name) ? this.state.first_name : ''}</h3>`).show();
      }
    }

    schoolListChangeHandle = (selectedoption) => {
      this.setState({ school_id: selectedoption });
    }

    render() {
      const { passValidate } = this.state;
      return (
        <div className="signupComponent">

          <h2 className="signup-title">Sign up </h2>
          <section className="containerr">
            <div className="clm">
              <div className="item">
                <label> First Name</label>
                <input type="text" onKeyUp={(e) => { this.setState({ first_name: e.target.value }); }} required />
                <p id="fnamerr" className="errorValid"></p>
              </div>
              <div className="item">
                <label>Last Name </label>
                <input type="text" onKeyUp={(e) => { this.setState({ last_name: e.target.value }); }} required />
                <p id="emailerr" className="errorValid"></p>
              </div>
              <div className="item">
                <label>Email </label>
                <input type="emai" onKeyUp={(e) => { this.setState({ email: e.target.value }); }} required />
                <p id="emailerr" className="errorValid"></p>
              </div>
              <div className="item">
                <label>School </label>

                <Select
                  className="react-select"
                  value={this.state.school_id}
                  onChange={this.schoolListChangeHandle}
                  options={this.state.school_options}
                />

              </div>
            </div>
            <div className="clm">
              <div className="item">
                <label>Birth Date</label>
                <input type="date" value={this.state.birthdate} onChange={(e) => { this.setState({ birthdate: e.target.value }); }} required />
                <p id="emailerr" className="errorValid"></p>
              </div>
              <div className="item">
                <label>Password </label>
                <input type="password" value={this.state.password} onChange={this.handlePassChange} required />
                <p className={passValidate}>
                  {this.state.passwordStrength}
                  {'   '}
                  {this.state.errorMessage}

                </p>

                <p id="emailerr" className="errorValid"></p>
              </div>
              <div className="item">
                <label>Confirm Password</label>
                <input type="password" onKeyUp={(e) => { this.setState({ cpassword: e.target.value }); }} required />
                <p id="emailerr" className="errorValid"></p>
              </div>
              <div className="item">
                <label>
Sum of
                  {this.state.vx}
                  {' '}
+
                  {this.state.vy}
                  {' '}
is:
                </label>
                <input type="number" onKeyUp={(e) => { this.setState({ sum: Number(e.target.value) }); }} required />
                <p id="emailerr" className="errorValid"></p>
              </div>
            </div>
          </section>
          <div className="check-robot">
            <label>I am not a robot</label>
            <input type="checkbox" onClick={(e) => { this.setState({ checkUser: e.target.checked }); }} required />
            <p id="emailerr" className="errorValid"></p>
          </div>
          <button value="Submit" onClick={this.onSubmitClickHandler} type="submit" className="signup-btn">Submit</button>
        </div>
      );
    }
}
