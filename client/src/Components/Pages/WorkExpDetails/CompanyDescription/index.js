import React from 'react';
import './style.css';

const CompanyDescriptionComp = (props) => {
    const {companyImage ,description} = props;
    return (
        <div className="companyDescription">
           <div className="companyLogo">
                <img  src = {companyImage} alt="companyImage" />
           </div>
           <div className="companyText">
                <p>{description}</p>
           </div>
        </div>
    )
}

export default CompanyDescriptionComp;