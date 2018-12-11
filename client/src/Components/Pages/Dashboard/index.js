/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Find from './ActiveJobs';
import Uploader from './UploadFile';
import Active from './MyActivety';
import starr from './images/star.svg';


import './style.css';

class Dashboard extends Component {
  render() {
    const { id, updateLoggingInfo } = this.props;
    return (
      <div className="grand-div">
        <div className="dash-board">
          <div className="sub-div">
            <PersonalInfo id={id} updateLoggingInfo={updateLoggingInfo} />
            <Find />
          </div>
          <div>
            <Uploader />
          </div>
          
        </div>
      </div>
    );
  }
}


export default Dashboard;
