import React, {
  Component,
} from 'react';
import axios from 'axios';
// import propTypes from 'prop-types';
import emailImg from './images/email.svg';
import phoneImg from './images/phone.svg';
import docImg from './images/docs.png';
import './style.css';

class PersonalInfo extends Component {
  state = {

    birthdate: '',
    email: '',
    first_name: '',
    id: 1,
    last_name: '',
    mobile: '',
    other_school: '',
    password: '',
    school_id: 1,
    user_name: '',
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
      user_name,
      first_name,
      last_name,
      email,
      mobile,
      school_id,
      other_school,
      birthdate,
    } = this.state;
    return (<div className="PersonalInfo">
      <h2>
Personal Info
      </h2>
      <span className="info">
      Name
        {' '}
        {first_name}
        {' '}
        {last_name}
      </span>
      <span className="info">
      Age
      </span>

      <span className="info">
      City

      </span>
      <span className="info">
      Favourit subject
      </span>
      <span className="info">
      Your Profile Complete
      %
      </span>
      {' '}
      <div className="progress-outer">
        <div
          className="progress-inner"
          style={
        {
          width: `${birthdate}%`,
        }
      }
        />
      </div>
      {' '}
      <div className="img">
        <img src={emailImg} alt="email" />
        {email}
      </div>
      <div className="img">
        <img
          src={
        phoneImg
      }
          alt="mobile"
        />
        {mobile}

      </div>
      <div className="img">
        <img src={docImg} alt="Docs" />
      Your Documents
      </div>
      {' '}

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
