import React, { Component } from 'react';
import './style.css'
import '../style.css'
class BasicDetails extends Component {
    state = {
        value : "",
    }
    render() { 
        return ( 
            <div>
                <div className="first-section">
                    <h2>Hello Azara,Please fill out these basic details and then we will move on to the interesting stuff</h2>
                    <div className="first-card">
                        <p>Azara , what school or college do you attend?</p>
                        <input type="text" className ="sec1-input"/>
                        <p>What is your current Year Group at Gaza Girls School?</p>
                        <input type="text" className ="sec1-input"/>
                    </div>
                    <div className="second-card">
                        <p>What is your home postcode <span>(we need this to work out how far you have to travel to your workexperience)</span></p>
                        <input type="text" className ="sec1-input" />
                        <p>What is your date of birth?</p>
                        <input type="date" className ="sec1-input" />
                    </div>
                    <div className="third-card">
                        <p>School email address</p>
                        <input type="email" className ="sec1-input" />
                        <p>Personal email address<span> (so we can alert you to new opportunities during the holidays)</span></p>
                        <input type="email" className ="sec1-input" />
                        <p>Mobile phone number</p>
                        <input type="number" className ="sec1-input" />
                    </div>
                </div>
                <div className="second-section">
                    <div className="fourth-card">
                    <h2>Your “In case of emergency” point of contact for when you take a work experience or insight day</h2>
                    <p>Name</p>
                    <input type="text" className ="sec2-input" />
                    <p>Their relationship to you</p>
                    <input type="text" className ="sec2-input" />
                    <p>Their emergency contact number</p>
                    <input type="number" className ="sec2-input" />
                    <p>Their email address</p>
                    <input type="email" className ="sec2-input" />
                    </div>
                    <div className="fifth-card">
                    <h2>If you are signing up to do a work experience,please let us know  more about this</h2>
                    <p>What month you expect your work experience to take place?</p>
                    <input type="month" className ="sec2-input" />
                    <p>Please tell us the date your work experience should begin</p>
                    <input type="date" className ="sec2-input" />
                    <p>Please tell us the date your work experience should end</p>
                    <input type="date" className ="sec2-input" />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BasicDetails;
