import React, { Component } from 'react';
import './style.css'
import '../style.css'

class BasicDetails1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            schoolName: '',
            grade: '',
            city: '',
            birthDate: '',
            scoolEmail: '',
            personalEmail: '',
            phoneNum: '',

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
                <form onSubmit={this.handleSubmit}>
                    <div className='basic-details1'>
                        <h2>Hello, Please fill out these basic details and then we will move on to the interesting stuff</h2>
                            <div className="basic-details1-content">
                                <div className="basic1-content1">
                                    <p>What school or college do you attend?</p>
                                    <input
                                        type="text"
                                        className ="sec1-input"
                                        name="schoolName"
                                        onChange={this.onChange}  
                                        placeholder="Enter school or college name.."
                                    />
                                    <p>What is your current Year Group at Gaza Girls School?</p>
                                    <input 
                                        type="text" 
                                        className ="sec1-input" 
                                        name="grade"
                                        onChange={this.onChange}
                                        placeholder="Enter your grade .."
                                    />
                                    <p>In which city exactly do you live?<span className="special-txt">(we need this to work out how far you have to travel to your workexperience if needed)</span></p>
                                    <input
                                        type="text"
                                        className ="sec1-input"
                                        name = "city"
                                        onChange={this.onChange}
                                        placeholder="Enter your city name .."
                                    />
                                </div>
                                <div className="basic1-content2">
                                    <p>What is your date of birth?</p>
                                    <input
                                        type="date"
                                        className ="sec1-input"
                                        name = "birthDate"
                                        onChange={this.onChange}
                                    />
                                    <p>School email address</p>
                                    <input
                                        type="email"
                                        className ="sec1-input"
                                        name = "schoolEmail"
                                        onChange={this.onChange}
                                        placeholder="***@**.edu"
                                    />
                                    <p>Personal email address<span className="special-txt"> (so we can alert you to new opportunities during the holidays)</span></p>
                                    <input
                                        type="email"
                                        className ="sec1-input"
                                        name = "personalEmail"
                                        onChange={this.onChange}
                                        placeholder="****@***.***"
                                    />
                                </div>
                            </div>
                            <p>Mobile phone number</p>
                                    <input
                                        type="text"
                                        className ="sec1-input"
                                        name = "phoneNum"
                                        onChange={this.onChange}
                                        placeholder="Enter ypur phone no."
                                    />
                        </div>
                    </form>
         );
    }
}

export default BasicDetails1;
