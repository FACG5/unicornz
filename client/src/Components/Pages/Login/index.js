import React, { Component } from 'react';
import Input from '../../CommonComponents/Inputs';
import Button from '../../CommonComponents/Button';
import './style.css';
export default class LoginForm extends Component {
    state = {
        email:'',
        password:''
    }

    // handleChange = event => {
    //     const { value, name } = event.target;
    //     console.log(this.state);
    //     this.setState({ [name]: value});
    // };

       render (){
        console.log(this.state);
        return (
            <div className="loginComponent">
                <Input name="email" label="Email" type="email" />
                <Input name="password" label="Password" type="password"/>
                <Button value="Submit" />
            </div>
        )
    }
}
