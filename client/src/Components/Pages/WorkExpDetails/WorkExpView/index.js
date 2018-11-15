import React from 'react';
import companyImage from './images/para-design.png';
import './style.css';

const WorkExperienceView = (props) => {
    return (
        <div className="workExperienceView">
            <img  src={companyImage} alt="companyImage" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>

    )
}

export default WorkExperienceView;