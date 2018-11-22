import React, { Component } from 'react';
import axios from 'axios';
// import propTypes from 'prop-types';
import emailImg from './images/email.svg';
import phoneImg from './images/phone.svg';
import docImg from './images/docs.png';
import './style.css';

class PersonalInfo extends Component {
state={
  name: '', city: '', age: '', favouritSubject: '', infoCompletion: '', email: '', mobile: '',
}

componentDidMount() {
  axios.get('/dash').then((res) => {
    const info = res.data;
    this.setState({ ...info });
  }).catch((error) => {
    console.log('error:', error);
  });
}

render() {
  const {
    name, city, age, favouritSubject, infoCompletion, email, mobile,
  } = this.state;
  return (
    <div className="PersonalInfo">
      <h2>Personal Info</h2>
      <span className="info">
Name
        {': '}
        {name}
      </span>
      <span className="info">
Age
        {': '}
        {age}
      </span>
      <span className="info">
City
        {': '}
        {city}
      </span>
      <span className="info">
Favourit subject
        {': '}
        {favouritSubject}
      </span>
      <span className="info">
Your Profile Complete
        {': '}
        {infoCompletion}

%
      </span>
      <div className="progress-outer">
        <div className="progress-inner" style={{ width: `${infoCompletion}%` }} />
      </div>
      <div className="img">
        <img src={emailImg} alt="email" />
        {email}
      </div>
      <div className="img">
        <img src={phoneImg} alt="mobile" />
        {mobile}
      </div>
      <div className="img">
        <img src={docImg} alt="Docs" />
Your Documents
      </div>
    </div>
  );
}
}
// index.propTypes = {
//   name: propTypes.string.isRequired,
//   city: propTypes.string.isRequired,
//   age: propTypes.string.isRequired,
//   favouritSubject: propTypes.string,
//   infoCompletion: propTypes.string,
// };
export default PersonalInfo;
