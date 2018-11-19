import React from 'react';
import './style.css';

const WorkExperienceView = (props) => {
    const {image1 , text1} = props;
    return (
        <div className="workExperienceView">
            <img  src={image1} alt="companyImage" />
            <p>{text1}</p>

        </div>

    )
}

export default WorkExperienceView;