import React from "react";
import getAge from "get-age";
import CircularProgressbar from "react-circular-progressbar";

import { NavLink } from "react-router-dom";

import "./style.css";

const ProfCard = props => {
  const {
    id,
    firstName,
    lastName,
    email,
    school,
    birthDate,
    grade,
    city,
    schoolEmail,
    emergency_name,
    phone_num,
    emergency_num,
    relation,
    emergency_email,
    period,
    begin_date,
    end_date,
    subjects,
    favsubjects,
    hobbies,
    future_job,
    interested_job,
    files,
    famous_entrepreneur,
    percentage
  } = props;

  return (
    <div className="profileContainer">
      <div className="profileItem">
        <h3>Profile Complete</h3>
        <CircularProgressbar
          className="circlepar"
          percentage={percentage}
          text={`${percentage}%`}
          styles={{
            path: { stroke: `rgba(62, 152, 199, ${percentage / 100})` },
            text: { fill: "#000", fontSize: "20px" }
          }}
        />
        <NavLink className="link1" to="/questionnaire">
          Edit Or Complete...
        </NavLink>
      </div>

      <div className="profileItem persent1">
        <h3>Personal Information</h3>
        <p>
          <span>Name:</span> {firstName} {lastName}
        </p>
        <p>
          <span>Email:</span> {email}
        </p>
        <p>
          <span>Age:</span> {getAge(birthDate)} Years
        </p>
        <p>
          <span>City:</span> {city}
        </p>
        <p>
          <span>Grade:</span> {grade}
        </p>
        <p>
          <span>Phone Number:</span> {phone_num}
        </p>
      </div>

      <div className="profileItem">
        <h3>Emergency Information</h3>
        <p>
          <span>Emergency Name:</span> {emergency_name}
        </p>
        <p>
          <span>Emergency Num:</span> {emergency_num}
        </p>
        <p>
          <span>Emergency Email:</span> {emergency_email}
        </p>
        <p>
          <span>Relation:</span> {relation}
        </p>
      </div>

      <div className="profileItem">
        <h3>School Information</h3>
        <p>
          <span>School:</span> {school}
        </p>
        <p>
          <span>School Email:</span> {schoolEmail}
        </p>
        <p>
          <span>My Subjects:</span>{" "}
          <ul>
            {subjects && subjects.map(subject => <li>{subject.value}</li>)}
          </ul>
        </p>
        <p>
          <span>Hobbies:</span> {hobbies}
        </p>
        <p>
          <span>Grade:</span> {grade}
        </p>
      </div>

      <div className="profileItem">
        <h3>Work Information</h3>
        <p>
          <span>Favourit Period:</span> {period}
        </p>
        <p>
          <span>Begin Date:</span> {begin_date}
        </p>
        <p>
          <span>End Date:</span> {end_date}
        </p>
        <p>
          <span>Favourit Subjects:</span>{" "}
          <ul>
            {favsubjects &&
              favsubjects.map(favsubjects => <li> {favsubjects.value}</li>)}
          </ul>
        </p>
        <p>
          <span>future_job:</span> {future_job}
        </p>
        <p>
          <span>Interested Job:</span> {interested_job}
        </p>
      </div>
      <div className="profileItem">
        <h3>My Docoumentaion</h3>
        <ul>
          {files &&
            files.map((val, key) => (
              <li>
                <a href={val} target="_blank">
                  {val.split("/")[3]}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfCard;
