import React from 'react';

import logo from './logo.png'
import { withRouter } from "react-router";

import './style.css'

class HeaderComp extends React.Component {


    signupClickHandler = () => {
        this.props.history.push('/signup');
     }
     
     loginClickHandler = () => {
        this.props.history.push('/login');
     }


    render(){
    return (
        <div className="header">
            <img className="header-img" src={logo} alt="logo" />
            <ul className="header-nav">
                <li onClick={this.loginClickHandler}>Login</li>
                <li onClick={this.signupClickHandler}>Sign up</li>

            </ul>
        </div>
    );
}
}


export default withRouter(HeaderComp);