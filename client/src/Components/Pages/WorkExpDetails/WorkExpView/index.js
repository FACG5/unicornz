import React from 'react';
import './style.css';

const WorkExperienceView = (props) => {
    const {image1 , text1} = props;
    return (
        <div className="workExperienceView">
            <img  src={image1} alt="companyImage" />
            <>{text1}</>

        </div>

    )
}

export default WorkExperienceView;