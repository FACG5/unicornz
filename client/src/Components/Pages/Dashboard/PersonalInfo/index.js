import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
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
    const fav_subjects = this.state.fav_subjects || [];
    console.log('lllllllll', fav_subjects);

    return (
      <div className="PersonalInfo">
        <h2>Personal Info</h2>
        <span className="info">
          Name:
          {' '}
          {first_name}
          {' '}
          {last_name}
        </span>
        <span className="info">
Date of birth:
          {' '}
          {birthdate}
        </span>
        <span className="info">
City:
          {' '}
          {city}
        </span>
        <span className="info">
Favourit subject:
          {
            fav_subjects && fav_subjects.map((val, key) => (
              <span>{val.value}</span>
            ))
        }
          {' '}

        </span>
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
    );
  }
}

export default PersonalInfo;
