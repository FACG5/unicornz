import React from 'react';
import companyLogo from './images/companyLogo.png';

import './style.css';
const CardComp = (props) => {
    return (
        <div className="mcard" onClick={()=>{}}>
        <h3 className="subjectName">Mathmatics</h3>

        <div className="card">
            <div>
                 <img  className="imageCard" src={companyLogo} alt="company logo" />
            </div>
            <div className="card-right">
                <h3 className="cardTitle">Quantity Surveying Management Trainee Programme with SES</h3>
                <div className="cardDitails">

                     <div className="cardLine">
                        <p><span>Country: </span>  London</p>
                        <p><span>Post code:</span>  + 44</p>
                        <p><span>Website:</span>  <a href="www.unicornz.uk">www.unicornz.uk</a></p>
                     </div>

                    <div className="cardLine"> 
                        <p><span>Starting Date:</span>  10/01/2019</p>
                        <p><span>Ending Date:</span>  20/01/2019</p>
                        <p><span>Salary:</span>  15 / Day</p>
                    </div>

            
                 </div>
            </div>
        </div>
        </div>
    )
}

export default CardComp;