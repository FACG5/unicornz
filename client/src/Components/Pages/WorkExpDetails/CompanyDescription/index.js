import React from 'react';
import companyImage from './images/para-design.png'
import './style.css';

const CompanyDescriptionComp = (props) => {
    return (
        <div className="companyDescription">
        <img src = {companyImage} alt="companyImage" />
        <p><b>ParaDesign</b> is a newly founded company in 2016 by a team of creative team that offers furniture and interior design in a very modern style ..
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        </div>
    )
}

export default CompanyDescriptionComp;