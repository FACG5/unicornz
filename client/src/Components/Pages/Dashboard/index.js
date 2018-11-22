import React, { Component } from 'react';
import Girl from './PersonalInfo';
import Find from './ActiveJobs';
import Prevjobs from './PreviuosJobs';
import News from './News';
import Active from './MyActivety';

import './style.css';

class Dashboard extends Component {
  state = {
    postcode: '',
    subject: '',
  };


handleChange = (event) => {
  const { value, name } = event.target;
  this.setState({ [name]: value });
};

handleClick =() => {
  const { postcode, subject } = this.state;
  console.log(postcode, ';;', subject);
}

render() {
  return (
    <div className="grand-div">
      <div className="dash-board">
        <div className="sub-div">
          <Girl />
          <Find onChange={this.handleChange} onClick={this.handleClick} />
        </div>
        <div className="sub-div">
          <Prevjobs prevJobs={['amazon', 'google', 'microsoft', 'github', 'apple']} />
          <News news={['111', '222', '333', '444']} />
        </div>
        <div className="sub-div">
          <Active activites={[{ job: 'job1', done: true }, { job: 'job2', done: false }, { job: 'job3', done: true }, { job: 'job4', done: false }]} />
        </div>
      </div>
    </div>
  );
}
}

export default Dashboard;
