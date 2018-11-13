import React from 'react';
import facebook from './images/facebook.png';
import email from './images/email.png';
import instagram from './images/instagram.png';
import website from './images/website.png';
import telephone from './images/telephone.png';

import './style.css';

const CompanyContactComp = (props) => {
    return (
        <div className="companyDescription">
            <h3>Para Design</h3>
            <h4>Passion to innovate</h4>
            <div className="contactItem">
                 <span> <img src={facebook} alt="facebook" /> /paradesign</span>
            </div>

            <div className="contactItem">
                 <span><img src={email} alt="email" /> paradesign@gmail.uk</span>
            </div>

            <div className="contactItem">
                 <span><img src={instagram} alt="instagram" /> paradesign</span>
            </div> 
            
            <div className="contactItem">
                 <span><img src={website} alt="website" /> www.paradesign.uk</span>
            </div>

            <div className="contactItem">
                 <span><img src={telephone} alt="telephone" /> +44 0000 000</span>
            </div>
        </div>
    )
}

export default CompanyContactComp;