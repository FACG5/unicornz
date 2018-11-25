import React, { Component } from 'react';
import starPic1 from '../LandingPage/HeroSection/images/start1.svg'
import starPic2 from '../LandingPage/HeroSection/images/start1.svg'

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
        console.log(this.state);
        return (
            <div className="sign-up">
                <img  className ="starPic2" src = {starPic2} alt = "" />
                <div class="signup-sec">
                    <div className = "mato-signup">
                        Where Girls Become the Future
                        <i class="fas fa-star top-left"></i>
                        <i class="fas fa-star top-right"></i>
                        <i class="fas fa-star bottom-left"></i>
                        <i class="fas fa-star bottom-right"></i>
                    </div>
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

                                        <input type="date" placeholder="birth of date" equired/>
                                        <p id="birthDaterr" className="errorValid"></p>

                                        <input type="text" name="email"  placeholder="Password" equired/>
                                        <p id="passworderr" className="errorValid"></p>

                                        <input type="text" name="email"  placeholder="Confirm Password" required/>
                                        <p id="Confirmerr" className="errorValid"></p>

                                        <label for="email">I am not a robot</label>
                                        <input type="checkbox" name="robot" id="email" required/>
                                        <p id="emailerr" className="errorValid"></p>
                                </div>
                            </section>
                        
                            <button className="signup-submit" value="Submit"> </button>
                        </form>
                    </div>
                </div>    
                <img  className ="starPic1" src = {starPic1} alt = "" />
            </div>
        )
    }
}