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
    const { id } = this.props;
    return (
      <div className="grand-div">
        <div className="dash-board">
          <div className="sub-div">
            <PersonalInfo history={this.props.history} id={id} />
            <Find />
          </div>
          <div>
            <Uploader />
          </div>
          <div className="sub-div">
            <Active activites={[{ job: 'job1', done: true }, { job: 'job2', done: false }, { job: 'job3', done: true }, { job: 'job4', done: false }]} />
            <img src={starr} alt="str" className="starr" />
          </div>
        </div>
      </div>
    );
  }
}


export default Dashboard;
