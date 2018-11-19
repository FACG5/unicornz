import React from 'react';

import './style.css';
const CardComp = (props) => {
    const {subjectName, companyLogo, expWorkTitle, country, postCode, website, startingDate, endingDate, pocketMoney}= props;
    return (
        <div className="mcard" >
        <h3 className="subjectName">{subjectName}</h3>

        <div className="card">
            <div>
                 <img  className="imageCard" src={companyLogo} alt="company logo" />
            </div>
            <div className="card-right">
              
                <h3 className="cardTitle">{expWorkTitle}</h3>
               
                <div className="cardDitails">

                     <div className="cardLine">
                        <p><span>Country: </span>  {country}</p>
                        <p><span>Post code:</span> {postCode}</p>
                        <p><span>Website:</span>  <a href="www.unicornz.uk">{website}</a></p>
                     </div>

                    <div className="cardLine"> 
                        <p><span>Starting Date:</span>  {startingDate}</p>
                        <p><span>Ending Date:</span>  {endingDate}</p>
                        <p><span>Salary:</span> {pocketMoney} Pounds/Day</p>
                    </div>

        
                 </div>
            </div>
        </div>
        </div>
    )
}

export default CardComp;