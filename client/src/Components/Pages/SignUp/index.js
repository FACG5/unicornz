import React, { Component } from 'react';
import Input from '../../CommonComponents/Inputs';
import Button from '../../CommonComponents/Button';
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
            <div className="signupComponent">

                <form id="signupform" enctype='multipart/form-data' action="/signup" method="POST">
                    <section class="containerr">
                        <div class="clm">
                            <div class="item">
                                <label for="name"> First Name</label>
                                <input type="text" name="name" id="fname" required/>
                                <p id="fnamerr" class="errorValid"></p>
                            </div>
                            <div class="item">
                                <label for="lname">Last Name </label>
                                <input type="text" name="lname" id="email" required/>
                                <p id="emailerr" class="errorValid"></p>
                            </div>
                            <div class="item">
                                <label for="email">Email </label>
                                <input type="emai" name="email" id="email" required/>
                                <p id="emailerr" class="errorValid"></p>
                            </div>
                            <div class="item">
                                <label for="email">School </label>
                                <input type="text" name="email" id="email" required/>
                                <p id="emailerr" class="errorValid"></p>
                            </div>
                            </div>
                            <div class="clm">
                            <div class="item">
                                <label for="email">Birth Date</label>
                                <input type="date" name="email" id="email" required/>
                                <p id="emailerr" class="errorValid"></p>
                            </div>
                            <div class="item">
                                <label for="email">Password </label>
                                <input type="text" name="email" id="email" required/>
                                <p id="emailerr" class="errorValid"></p>
                            </div>
                            <div class="item">
                                <label for="email">Confirm Password</label>
                                <input type="text" name="email" id="email" required/>
                                <p id="emailerr" class="errorValid"></p>
                            </div>
                            <div class="item">
                                <label for="email">I am not a robot</label>
                                <input type="checkbox" name="robot" id="email" required/>
                                <p id="emailerr" class="errorValid"></p>
                            </div>
                        </div>
                    </section>
                    <Button value="Submit" />
                </form>

            </div>
        )
    }
}