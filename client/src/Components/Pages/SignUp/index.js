import React, { Component } from 'react';
import Input from '../../CommonComponents/Inputs';
import Button from '../../CommonComponents/Button';

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
        checkUser: false,
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value});
    };
   

    render (){
        console.log(this.state);
        return (
            <div className="signupComponent">
                <Input name="username" label="Username" type="text" onChange={this.handleChange}/>
                <Input name="fname" label="First Name" type="text" onChange={this.handleChange}/>
                <Input name="lname" label="Last Name" type="text" onChange={this.handleChange}/>
                <Input name="email" label="Email" type="text" onChange={this.handleChange}/>
                <Input name="school" label="Your School" type="text" onChange={this.handleChange}/>
                <Input name="birthDate" label="Birth Date" type="date" onChange={this.handleChange}/>
                <Input name="password" label="Password" type="password" onChange={this.handleChange}/>
                <Input name="cpassword" label="Re-Enter Password" type="password" onChange={this.handleChange}/>
                <Button value="Submit" onClick={this.handleClick} />
                <input name="checkUser" type="checkbox" onChange={this.handleChange}/> I'm not Robot
            </div>
        )
    }
}