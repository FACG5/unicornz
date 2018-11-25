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

     homehandler = () => {
        this.props.history.push('/');
     }

    render(){
    return (
        <div className="header">
            <img className="header-img" src={logo} alt="logo" onClick={this.homehandler}/>
            <ul className="header-nav">
                <li onClick={this.loginClickHandler}>Login</li>
                <li onClick={this.signupClickHandler}>Sign up</li>

            </ul>
        </div>
    );
}
}


export default withRouter(HeaderComp);