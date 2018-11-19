import React, { Component } from 'react';
import Input from '../../CommonComponents/Inputs';
import Button from '../../CommonComponents/Button';
import './style.css';
export default class LoginForm extends Component {
    state = {
        email:'',
        password:''
    }

    onClickHandler = () => {
        fetch('/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            }).then(res => res.json())
            .then(res => {
                if(res.result)
                    alert(res.message);
                else{
                    alert(res.message);
                    this.props.history.push('/');
                }
            })
    }
    
       render (){
        console.log(this.state);
        return (
            <div className="loginComponent">
                <Input name="email" label="Email" type="email" />
                <Input name="password" label="Password" type="password"/>
                <Button value="Submit" onClick={ this.onClickHandler }/>
            </div>
        )
    }
}
