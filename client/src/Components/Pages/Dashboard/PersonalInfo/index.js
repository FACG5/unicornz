import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
      user_name,
      first_name,
      last_name,
      email,
      phone_num,
      school_id,
      other_school,
      birthdate,
      percentage,
    } = this.state;
    return (
      <div>
        <div className="personal1 PersonalInfo">
          <h2>Personal Info</h2>
          <span className="info">
            Donia Hassona
            {' '}
            {first_name}
            {' '}
            {last_name}
          </span>

          <span className="info">
            From:
            {' '}
            {city}
            London
          </span>
          <span className="info">Date of birth:</span>
          <span className="info">
            {' '}
            {birthdate}
            21/8/1998
          </span>
          <span className="info">Favourit subject: </span>
          <ul>
            <li>Math</li>
            <li>Sinece</li>
            <li>sds</li>
          </ul>
          <div className="img">
            <img src={emailImg} alt="email" />
            {email}
          </div>
          <div className="img">
            <img src={phoneImg} alt="mobile" />
            {phone_num}
          </div>
          <div className="img">
            <img src={docImg} alt="Docs" />
          Your Documents
          </div>
        </div>
        <div className="PersonalInfo">
          <span className="info progress-info">
Your Profile Complete:
            {' '}
            {percentage}
%
          </span>
          {' '}
          <Link to="/questionnaire" className="profile-link">
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
