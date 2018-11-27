import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const CardComp = (props) => {
  const {
    id, subjectName, companyLogo, expWorkTitle, country, start_time, max_number,
    end_time, startingDate, endingDate, pocketMoney, company_name,
  } = props;

  return (
    <NavLink to={`workexperiencedetails/${id}`}>
      <div className="mcard">
        <h3 className="subjectName">{subjectName}</h3>

        <div className="card">
          <div className="card-left">
            <img className="imageCard" src={companyLogo} alt="company logo" />
          </div>
          <div className="card-right">

            <h3 className="cardTitle">{expWorkTitle}</h3>

            <div className="cardDitails">

              <div className="cardLine">
                <p>
                  <span>Company Name: </span>
                  {' '}
                  {company_name}
                </p>
                <p>
                  <span>Country: </span>
                  {' '}
                  {country}
                </p>
                <p>
                  <span>Start Time: </span>
                  {' '}
                  {start_time}
                </p>
                <p>
                  <span>End Time: </span>
                  {' '}
                  {end_time}
                </p>

              </div>

              <div className="cardLine">
                <p>
                  <span>Starting Date:</span>
                  {' '}
                  {startingDate}
                </p>
                <p>
                  <span>Ending Date:</span>
                  {' '}
                  {endingDate}
                </p>
                <p>
                  <span>Salary:</span>
                  {' '}
                  {pocketMoney}
                  {' '}
Pounds/Day
                </p>
                <p>
                  <span>Number: </span>
                  {' '}
                  {max_number}
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </NavLink>

  );
};


export default CardComp;
