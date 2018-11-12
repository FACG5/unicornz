import React from "react";
import propTypes from 'prop-types';
import emailImg from './images/email.svg';
import phoneImg from './images/phone.svg';
import docImg from './images/docs.png'
import "./style.css";


export default function index(props){
const   {name ,city ,age ,favouritSubject,infoCompletion,email,mobile}= props;
return(
  <React.Fragment>
  <div className="PersonalInfo">
  <h2>Personal Info</h2>
    <span className="info">Name: {name}</span>
    <span className="info">Age:{age}</span>
    <span className="info">City: {city}</span>
    <span className="info">Favourit subject: {favouritSubject}</span>
    <span className="info">Your Profile Complete: {infoCompletion}</span>
     <div className="img"><img src={emailImg} alt='email'/> {email}</div>
    <div className="img"><img src={phoneImg} alt='mobile'/> {mobile}</div>
    <div className="img"><img src={docImg} alt='Docs'/> Your Documents</div>
    </div>
  </React.Fragment>
)
}

index.propTypes = {
    name: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    age: propTypes.string.isRequired,
    favouritSubject: propTypes.string,
    infoCompletion: propTypes.string,
}
