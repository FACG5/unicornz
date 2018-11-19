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
                <div class="login-container">
                    <div class="login-card">
                        <form method="POST" action="/login">
                            <input id="email" type="text" name="username" placeholder="Email" required />
                            <p id="emailErr" class="errorValid"></p>
                            <input type="password" name="pass" id="password" placeholder="Password"/>
                            <p id="emailErr" class="errorValid"></p>
                            <Button  onClick={ this.onClickHandler } class="login login-submit" id="login" value="login"/>
                        </form>
                    </div>
                </div>
            </div>
        )
        }
}