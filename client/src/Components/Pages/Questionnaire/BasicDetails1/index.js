import React, { Component } from 'react';
import './style.css';
import '../style.css';

class BasicDetails1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: '',
      city: '',
      scoolEmail: '',
      phoneNum: '',

    };
  }

  render() {
    const storage = localStorage.getItem('state') || '{}';
    const parsedStorage = JSON.parse(storage);
    const {
      grade, city, schoolEmail, phoneNum,
    } = parsedStorage;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="basic-details1">
          <h2>Hello, Please fill out these basic details and then we will move on to the interesting stuff</h2>
          <div className="basic-details1-content">
            <div className="basic1-content1">
              <p>What is your current Year Group at UK School?</p>
              <input
                type="text"
                className="sec1-input"
                name="grade"
                onChange={this.props.handleChange}
                placeholder="Enter your grade .."
              />
              <p>
In which city exactly do you live?
                <span className="special-txt">(we need this to work out how far you have to travel to your workexperience if needed)</span>
              </p>
              <input
                type="text"
                className="sec1-input"
                name="city"
                onChange={this.props.handleChange}
                placeholder="Enter your city name .."
              />
            </div>
            <div className="basic1-content2">
              <p>School email address</p>
              <input
                type="email"
                className="sec1-input"
                name="schoolEmail"
                onChange={this.props.handleChange}
                placeholder="***@**.edu"
              />
              <p>Enter your phone number</p>
              <input
                type="text"
                className="sec1-input"
                name="phoneNum"
                onChange={this.props.handleChange}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default BasicDetails1;
