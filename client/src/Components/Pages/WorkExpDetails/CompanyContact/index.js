import React from 'react';
import face from './images/facebook.png';
import emaill from './images/email.png';
import instagram from './images/instagram.png';
import site from './images/website.png';
import telephone from './images/telephone.png';

import './style.css';

const CompanyContactComp = (props) => {
    const {companyName, companyVision, facebook, email, inistagram, website, phone}=props;
    return (
        <div className="companyContact">
            <h3>{companyName}</h3>
            <h4>{companyVision}</h4>
            <div className="contactItem">
                 <span> <img src={face} alt="facebook" /> {facebook}</span>
            </div>
            <div className="contactItem">
                 <span><img src={emaill} alt="email" />{email}</span>
            </div>

            <div className="contactItem">
                 <span><img src={instagram} alt="instagram" /> {inistagram}</span>
            </div> 

            <div className="contactItem">
                 <span><img src={site} alt="website" /> {website}</span>
            </div>

            <div className="contactItem">
                 <span><img src={telephone} alt="telephone" /> {phone}</span>
            </div>
        </div>
    )
}

export default CompanyContactComp;