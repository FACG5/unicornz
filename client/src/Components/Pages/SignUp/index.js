import React, { Component } from 'react';
import starPic1 from '../LandingPage/HeroSection/images/start1.svg'
import starPic2 from '../LandingPage/HeroSection/images/start1.svg'
import spark from './image/thunder.svg'

import './style.css';

export default class SignUpForm extends Component {
    state = {
        username:'',
        fname:'',
        lname:'',
        email:'',
        school:'',
        birthDate:'',
        password:'',
        cpassword:'',
        checkUser:false,
    }

    handleChange = event => {
        const { value, name } = event.target;
        console.log(this.state);
        this.setState({ [name]: value});
    };

    handleClick = () => {
        if (this.state.checkuser) {
            alert('You have successfully signup!');
        } else {
            alert('Please verify that you are a human!');
        }
    }



    render (){

        return (
            <div className="sign-up">
                <img  className ="starPic2" src = {starPic2} alt = ""/>
                <div class="signup-sec">
                    <p id="sign-up-p">Sign up <img src={spark} alt="" id="spark"/></p>
                    <div className="signupComponent">
                        <form id="signupform" enctype='multipart/form-data' action="/signup" method="POST">
                            <section className="containerr">
                                <div className="clm">

                                        <input type="text" name="name"  placeholder="First name" required/>
                                        <p id="fnamerr" className="errorValid"></p>

                                        <input type="text" name="lname"  placeholder="Last name" required/>
                                        <p id="lnamerr" className="errorValid"></p>

                                    <input type="email" name="email"  placeholder="Email" required/>
                                        <p id="emailerr" className="errorValid"></p>

                                        <input type="text" placeholder="School name" required/>
                                        <p id="schoolerr" className="errorValid"></p>

                                        <input type="date" placeholder="birth of date" required/>
                                        <p id="birthDaterr" className="errorValid"></p>

                                        <input type="text" name="email"  placeholder="Password" required/>
                                        <p id="passworderr" className="errorValid"></p>

                                        <input type="text" name="email"  placeholder="Confirm Password" required/>
                                        <p id="Confirmerr" className="errorValid"></p>

                                        <label for="check"><span id="robot">I am not a robot </span><input type="checkbox" name="robot" id="check" required/></label>
                                        <p id="emailerr" className="errorValid"></p>
                                </div>
                            </section>
                        
                            <button className="signup-submit" value="Submit" > Sign Up </button>
                        </form>
                    </div>
                </div>    
                <img  className ="starPic1" src = {starPic1} alt = "" />
            </div>
        )
    }
}