import React, { Component } from 'react';
import NextBtn from '../../../CommonComponents/Button'
import './style.css'
import '../style.css'

class BasicDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            schoolName: '',
            grade: '',
            postcode: '',
            birthDate: '',
            scoolEmail: '',
            personalEmail: '',
            phoneNum: '',
            emergencyName: '',
            relation: '',
            emergencyNum: '',
            emergencyEmail: '',
            period: '',
            beginDate: '',
            endDate: '',
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        console.log('data', data);
        
    }


  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
        [name]: value
    });
  };
    
    render() {

        return (
                <form onSubmit={this.handleSubmit} className='container'>
                    <div className="first-section">
                        <h2>Hello Azara,Please fill out these basic details and then we will move on to the interesting stuff</h2>
                        <div className="first-section-cards">
                            <div className="first-card">
                                <span className="num" id="num1">1</span>
                                <p>Azara , what school or college do you attend?</p>
                                <input
                                    type="text"
                                    className ="sec1-input"
                                    name="schoolName"
                                    onChange={this.onChange}  
                                />
                                <p>What is your current Year Group at Gaza Girls School?</p>
                                <input 
                                    type="text" 
                                    className ="sec1-input" 
                                    name="grade"
                                    onChange={this.onChange}
                                />
                                <h1 className="shape">&#9734;</h1>
                            </div>
                            <div className="second-card">
                                <span className="num" id="num2">2</span>
                                <p>What is your home postcode <span className="special-txt">(we need this to work out how far you have to travel to your workexperience)</span></p>
                                <input
                                    type="text"
                                    className ="sec1-input"
                                    name = "postcode"
                                    onChange={this.onChange}
                                />
                                <p>What is your date of birth?</p>
                                <input
                                    type="date"
                                    className ="sec1-input"
                                    name = "birthDate"
                                    onChange={this.onChange}
                                />
                                <h1 className="shape">&#9734;</h1>
                            </div>
                            <div className="third-card">
                                <span className="num" id="num3">3</span>
                                <p>School email address</p>
                                <input
                                    type="email"
                                    className ="sec1-input"
                                    name = "schoolEmail"
                                    onChange={this.onChange}
                                />
                                <p>Personal email address<span className="special-txt"> (so we can alert you to new opportunities during the holidays)</span></p>
                                <input
                                    type="email"
                                    className ="sec1-input"
                                    name = "personalEmail"
                                    onChange={this.onChange}
                                />
                                <p>Mobile phone number</p>
                                <input
                                    type="number"
                                    className ="sec1-input"
                                    name = "phoneNum"
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="second-section">
                        <div className="second-section-cards">
                            <div>
                                <h2>Your “In case of emergency” point of contact for when you take a work experience or insight day</h2>
                                <div className="fourth-card">
                                    <span className="num" id="num4">4</span>
                                    <p>Name</p>
                                    <input
                                        type="text"
                                        className ="sec2-input"
                                        name = "emergencyName"
                                        onChange={this.onChange}
                                    />
                                    <p>Their relationship to you</p>
                                    <input
                                        type="text"
                                        className ="sec2-input"
                                        name = "relation"
                                        onChange={this.onChange}
                                    />
                                    <p>Their emergency contact number</p>
                                    <input
                                        type="number"
                                        className ="sec2-input"
                                        name = "emergencyNum"
                                        onChange={this.onChange}
                                    />
                                    <p>Their email address</p>
                                    <input
                                        type="email"
                                        className ="sec2-input"
                                        name = "emergencyEmail"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <h2>If you are signing up to do a work experience,please let us know  more about this</h2>
                                <div className="fifth-card">
                                    <span className="num" id="num5">5</span>
                                    <p>What month you expect your work experience to take place?</p>
                                    <input
                                        type="month"
                                        className ="sec2-input"
                                        name = "period"
                                        onChange={this.onChange}
                                    />
                                    <p>Please tell us the date your work experience should begin</p>
                                    <input 
                                        type="date"
                                        className ="sec2-input"
                                        name = "beginDate"
                                        onChange={this.onChange}
                                    />
                                    <p>Please tell us the date your work experience should end</p>
                                    <input
                                        type="date"
                                        className ="sec2-input"
                                        name = "endDate"
                                        onChange={this.onChange}
                                    />
                                    <h1 className="shape">Cool&#9786;</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <NextBtn className="button" name="next" value="next"/>
                        </div>
                    </div>
                    </form>
         );
    }
}

export default BasicDetails;
