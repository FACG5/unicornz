/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Find from './ActiveJobs';
import Uploader from './UploadFile';
// import Active from './MyActivety';
// import starr from './images/star.svg';


import './style.css';


class Dashboard extends Component {
  render() {
    if (!document.cookie) {
      return window.location = '/';
    }
    const { id, updateLoggingInfo, userInfo } = this.props;
    return (
      <div className="grand-div">
        <div className="dash-board">
          <div className="sub-div">
            <PersonalInfo id={id} updateLoggingInfo={updateLoggingInfo} />
            <Find />
          </div>
          <div>
            <Uploader userInfo={userInfo} />
          </div>

        </div>
      </div>
    );
  }
}


export default Dashboard;
