import React, { Component } from 'react';
import Girl from './PersonalInfo'
import Find from './ActiveJobs'
import Prevjobs from './PreviuosJobs'
import News from './News'
import Active from './MyActivety'

import './style.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="grand-div">
        <header className="App-header">
        </header>
        <div className="dash-board">
        <div className="sub-div">
        <Girl name={'Marie'} city={'london'} age={18} favouritSubject={'science'} infoCompletion={'75'} email={'gmail.something'} mobile={'059999999'} />
      <Find />
      </div>
      <div className="sub-div">
      <Prevjobs  prevJobs={['amazon','google','microsoft','github','apple']}/>
      <News news={['111','222','333','444']} />
      </div>
      <div className="sub-div">
      <Active  activites={[{job:'job1',done:true},{job:'job2',done:false},{job:'job3',done:true},{job:'job4',done:false}]} />
      </div>
      </div>
      </div>
    );
  }
}

export default Dashboard;
