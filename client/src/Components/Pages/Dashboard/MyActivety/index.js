import React from 'react';
import './style.css';
import loading from './images/loading.png';
import request from './images/request.png';

export default function index (props){
  const{activites}=props;
  return(
  <React.Fragment>
  <div className='my-activity'>
  <h2>My activity</h2>
  {
activites.map((val,index) => {
     const { done,job}=val;
     if(done) {return (
    <div className="done" key={index}>
    <img src={request} alt="news"/>{' '}
<span>{job}</span>
    </div>
) }})}

{activites.map((val,index) => {
     const { done,job}=val;
     if(!done) {return (
     <div className="not-done" key={index}>
       <img src={loading} alt="news"/>{' '}
     <span>{job}</span>
     </div>
     )}})


}
</div>
</React.Fragment>

)
}
