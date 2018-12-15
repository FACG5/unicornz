import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const ProfCard = (props) => {
  const { id, firstName, lastName, email, school, birthDate, grade, city, schoolEmail, emergency_name,
          phone_num, emergency_num,relation, emergency_email, period, begin_date, end_date, subjects,
          favsubjects, hobbies, future_job, interested_job, files, famous_entrepreneur, percentage } = props;


  return (
      <div>
          <div className="personalProfile">
              <h3>Personal Information</h3>
              <p><span>Name:</span>{' '}{firstName}{' '}{lastName}</p>
              <p><span>Email:</span>{' '}{email}</p>
              <p><span>birthDate:</span>{' '}{birthDate}</p>
              <p><span>City:</span>{' '}{city}</p>
              <p><span>Grade:</span>{' '}{grade}</p>
              <p><span>Phone Number:</span>{' '}{phone_num}</p>
          </div>

          <div className="emergencyProfile">
              <h3>Emergency Information</h3>
              <p><span>Emergency Name:</span>{' '}{emergency_name}</p>
              <p><span>Emergency Num:</span>{' '}{emergency_num}</p>
              <p><span>Emergency Email:</span>{' '}{emergency_email}</p>
              <p><span>Relation:</span>{' '}{relation}</p>
          </div>

          <div className="schoolProfile">
              <h3>School Information</h3>
              <p><span>School:</span>{' '}{school}</p>
              <p><span>School Email:</span>{' '}{schoolEmail}</p>
              <p><span>My Subjects:</span>{' '}{subjects}</p>
              <p><span>City:</span>{' '}{hobbies}</p>
              <p><span>Grade:</span>{' '}{grade}</p>
          </div>

           <div className="workProfile">
              <h3>Work Information</h3>
              <p><span>Favourit Period:</span>{' '}{period}</p>
              <p><span>Begin Date:</span>{' '}{begin_date}</p>
              <p><span>End Date:</span>{' '}{end_date}</p>
              <p><span>Favourit Subjects:</span>{' '}{favsubjects}</p>
              <p><span>future_job:</span>{' '}{future_job}</p>
              <p><span>Interested Job:</span>{' '}{interested_job}</p>
          </div>

      </div>
    

  );
};


export default ProfCard;
