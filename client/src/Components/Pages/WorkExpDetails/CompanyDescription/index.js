import React from 'react';
import './style.css';

const CompanyDescriptionComp = (props) => {
    const {companyImage ,description} = props;
    return (
        <div className="companyDescription">
           <div className="companyLogo">
                <img  src = {companyImage} alt="companyImage" />
           </div>
           <p className="companyText">{description}</p>
        </div>
    )
}

export default CompanyDescriptionComp;