import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emailImg from './images/email.svg';
import phoneImg from './images/phone.svg';
import docImg from './images/docs.png';
import './style.css';

class PersonalInfo extends Component {
  state = {
  };

  componentWillMount() {
    const { updateLoggingInfo } = this.props;
    updateLoggingInfo();
  }


  componentDidUpdate() {
    const { id } = this.props;
    if (this.props.id !== this.state.id) {
      this.setState(() => ({ id }), () => {
        axios
          .get(`/api/v1/dash/${id}`)
          .then((res) => {
            const info = res.data;
            this.setState({ ...info });
          })
          .catch((error) => {
            console.log('error:', error);
          });
      });
    }
  }

  render() {
    const {
      city,
      first_name,
      last_name,
      email,
      phone_num,
      birthdate,
      percentage,
    } = this.state;
    const favsubjects = this.state.favsubjects || [];
    return (
      <div>
        <div className="personal1 PersonalInfo">
          <h2>Personal Info</h2>
          <span className="info">
            {' '}
            {first_name}
            {' '}
            {last_name}
          </span>

          <span className="info">
            From:
            {' '}
            {city}
          </span>
          <span className="info">
            Date of birth:
            {' '}
            {birthdate}
          </span>
          <span className="info">Favourit subject: </span>
          {
            favsubjects && favsubjects.map((val, key) => (
              <ul>
                <li>{val.value}</li>
              </ul>
            ))
          }
          {' '}
          <span className="info">
          </span>
          {' '}
          <div className="img">
            <img src={emailImg} alt="email" />
            {email}
          </div>
          <div className="img">
            <img src={phoneImg} alt="mobile" />
            {phone_num}
          </div>
          <Link to="/profile">Your Profile</Link>

        </div>
        <div className="PersonalInfo">
          <span className="info">
Your Profile Complete:
            {' '}
            {percentage}
            {' '}
%
          </span>
          {' '}
          <Link to="/questionnaire">
            <div className="progress-outer">
              <div
                className="progress-inner"
                style={{
                  width: `${percentage}%`,
                }}
              />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
