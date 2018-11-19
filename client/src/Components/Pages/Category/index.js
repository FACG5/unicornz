import React from 'react';
import { NavLink } from 'react-router-dom';
import girl from './images/girl.png';
import teacher from './images/teacher.png';
import company from './images/company.png';
import ambassador from './images/ambassador.png';
import './style.css';
 const CategoryComponent = (props) => {
    return (
        <div className="signupCategory">
            <div className="categoryElement">
                <NavLink to="/signup">
                   <img src={girl} alt="girl" />
                </NavLink>
                <h3>Girl Student</h3>
            </div>
             <div className="categoryElement">
                <img src={teacher} alt="gteacher" />
                <h3>Teacher</h3>
            </div>
             <div className="categoryElement">
                <img src={company} alt="Company" />
                <h3>Company</h3>
            </div>
             <div className="categoryElement">
                <img src={ambassador} alt="ambassador" />
                <h3>Ambassador</h3>
            </div>
      
        </div>
    )
}
 export default CategoryComponent; 