import React from 'react';
import './style.css';
import loading from './images/loading.png';
import request from './images/request.png';

export default ({ activites }) => (
  <div className="my-activity">
    <h2>My activity</h2>
    <h3>Done Jobs</h3>
    {
activites.map((val, index) => {
  const { done, job } = val;
  if (done) {
    return (
      <div className="done activity" key={index}>
        <img src={request} alt="news" />
        <span>{job}</span>
      </div>
    );
  }
})}
    <h3>Requests</h3>
    {activites.map((val, index) => {
      const { done, job } = val;
      if (!done) {
        return (
          <div className="not-done activity" key={index}>
            <img src={loading} alt="news" />
            <span>{job}</span>
          </div>
        );
      }
    })


}
  </div>

);
