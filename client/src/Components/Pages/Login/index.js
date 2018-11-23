import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../../CommonComponents/Button';
import './style.css';
import { withRouter } from "react-router";
import alertify from 'alertifyjs'

export default withRouter (class LoginForm extends Component {
    state = {
        username:'',
        password:''
    }

        onClickHandler = () => {
            console.log(
                JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            )
            fetch('/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: this.state.username,
                        password: this.state.password
                    }),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                        // "Content-Type": "application/x-www-form-urlencoded",
                    }
                }).then(res => res.json())
                .then(res => {
                    if(res.status){
                        alertify.alert('Success', 'You have been logged in successfuly', ()=>alertify.success('OK'));
                        console.log(res);
                        console.log('success');
                        this.props.refreshAppModalState(null,false);
                        this.props.updateLoggingInfo();
                    } else {
                        alertify.alert('Login failed', res.msg, ()=>alertify.error('OK'));
                    }
                })
        }

        componentDidMount(){
           this.setState({
            username: ReactDOM.findDOMNode(this.refs.usernameinput).value,
            password: ReactDOM.findDOMNode(this.refs.passwordinput).value
           })
        }
        // up no press to catch the last key pressed
        usernameOnKeyUp = (e)=>{
            this.setState({username:e.target.value})
        }
        passwordOnKeyUp = (e)=>{
            this.setState({password:e.target.value})
        }

       render (){
        return (
            <div className="loginComponent">
                    <div className="login-card">
                            <input id="username" type="text" name="username" placeholder="User Name" ref="usernameinput" onKeyUp={this.usernameOnKeyUp} required />
                            <input type="password" name="pass" id="password" placeholder="Password" ref="passwordinput" onKeyUp={this.passwordOnKeyUp}/>
                            <Button onClick={ this.onClickHandler } className="login login-submit" id="login" value="login"/>

                    </div>
            </div>
        )
        }
})