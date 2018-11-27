import React, { Component } from 'react';
import alertify from 'alertifyjs';
import Select from 'react-select';
import Button from '../../CommonComponents/Button';

import './style.css';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default class SignUpForm extends Component {
    state = {
      user_name: null,
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
    }


    componentWillMount() {
      this.setState({ vx: Math.floor(Math.random() * 100), vy: Math.floor(Math.random() * 100) });
      fetch('/api/v1/getschoolslist').then(res => res.json())
        .then(res => this.setState({ school_options: res }));
    }

    onSubmitClickHandler = () => {
      if (!this.state.user_name || this.state.user_name.trim() === '') {
        alertify.dialog('alert').set({ transition: 'fade', message: 'Please enter a user name!' }).setHeader('<h3>No user name!</h3>').show();
      } else if (!this.state.first_name || this.state.first_name.trim() === '') {
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
            user_name: this.state.user_name,
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
        }).then(res => res.json())
          .then((res) => {
            if (res.status === 'success') {
              alertify.dialog('alert').set({ transition: 'fade', message: 'You signed up in successfuly' }).setHeader('<h2>Success</h2>').show();
              this.props.refreshAppModalState(null, false);
              this.props.updateLoggingInfo();
            } else {
              alertify.set('notifier', 'position', 'top-center');
              alertify.error('Signup failed');
            }
          });
      } else {
        alertify.dialog('alert').set({ transition: 'fade', message: 'Please answer the question and check the "I am not a robot" check box' }).setHeader(`<h3>Hi, ${(this.state.first_name) ? this.state.first_name : ''}</h3>`).show();
      }
    }

    schoolListChangeHandle = (selectedoption) => {
      this.setState({ school_id: selectedoption });
    }

    render() {
      return (
        <div className="signupComponent">

          <h2 className="signup-title">Sign up </h2>
          <section className="containerr">
            <div className="clm">
              <div className="item">
                <label> User Name</label>
                <input type="text" onKeyUp={(e) => { this.setState({ user_name: e.target.value }); }} required />
                <p id="fnamerr" className="errorValid"></p>
              </div>
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
                <input type="date" value="2005-01-01" onKeyUp={(e) => { this.setState({ birthdate: e.target.value }); }} required />
                <p id="emailerr" className="errorValid"></p>
              </div>
              <div className="item">
                <label>Password </label>
                <input type="password" onKeyUp={(e) => { this.setState({ password: e.target.value }); }} required />
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
              <div className="item">
                <label>I am not a robot</label>
                <input type="checkbox" onClick={(e) => { this.setState({ checkUser: e.target.checked }); }} required />
                <p id="emailerr" className="errorValid"></p>
              </div>
            </div>
            <Button value="Submit" onClick={this.onSubmitClickHandler} />
          </section>


        </div>
      );
    }
}
