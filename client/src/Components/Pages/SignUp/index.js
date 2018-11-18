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
                <Input className="inputComponent" name="username" label="Username" type="text" onChange={this.handleChange}/>
                <Input name="fname" label="First Name" type="text" onChange={this.handleChange}/>
                <Input name="lname" label="Last Name" type="text" onChange={this.handleChange}/>
                <Input name="email" label="Email" type="email" onChange={this.handleChange}/>
                <Input name="school" label="Your School" type="text" onChange={this.handleChange}/>
                <Input name="birthDate" label="Birth Date" type="date" onChange={this.handleChange}/>
                <Input name="password" label="Password" type="password" onChange={this.handleChange}/>
                <Input name="cpassword" label="Re-Enter Password" type="password" onChange={this.handleChange}/>
                <input name="checkUser" type="checkbox" onChange={this.handleChange} onClick={this.handleClick}/> I'm not Robot
                <Button value="Submit" />
            </div>
        )
    }
}