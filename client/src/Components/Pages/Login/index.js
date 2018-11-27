import React, { Component } from 'react';
import starPic1 from '../LandingPage/HeroSection/images/start1.svg'
import starPic2 from '../LandingPage/HeroSection/images/start1.svg'
import spark1 from '../SignUp/image/thunder.svg'

import './style.css';

export default class LoginForm extends Component {
    state = {
        email:'',
        password:''
    }

        onClickHandler = () => {
            // fetch('/login', {
            //         method: 'POST',
            //         body: JSON.stringify({
            //             username: this.state.username,
            //             password: this.state.password
            //         })
            //     }).then(res => res.json())
            //     .then(res => {
            //         if(res.result)
            //             alert(res.message);
            //         else{
            //             alert(res.message);
            //             this.props.history.push('/');
            //         }
            //     })
                this.props.history.push('/');
        }

       render (){
        
        return (
            <div className="login">
                <img  className ="starPic2" src = {starPic2} alt = ""/>
                <div class="login-sec">
                    <p id="login-p">Login <img src={spark1} alt="" id="spark1"/></p>
                    <div className="loginComponent">
                        <div class="login-container">
                            <form >
                                <input id="email" type="text" name="username" placeholder="Email" required />
                                <p id="emailErr" class="errorValid"></p>
                                <input type="password" name="pass" id="password" placeholder="Password"/>
                                <p id="emailErr" class="errorValid"></p>
                                <button className=" login-submit" onClick={ this.onClickHandler } value="login"> Login </button>
                            </form>
                        </div>
                    </div>
                </div>
                <img  className ="starPic1" src = {starPic1} alt = "" />
            </div>
        )
        }
}

