/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Find from './ActiveJobs';
// import Active from './MyActivety';
import './style.css';

class Dashboard extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="grand-div">
        <div className="dash-board">
          <div className="sub-div">
            <PersonalInfo history={this.props.history} id={id} />

          </div>
          <div className="sub-div">
            <Find />
            {/* <Active
              activites={[
                { job: 'job1', done: true },
                { job: 'job2', done: false },
                { job: 'job3', done: true },
                { job: 'job4', done: false },
              ]}
            /> */}
          </div>
        </div>
      </div>
    );
  }
}


export default Dashboard;
