import React from 'react';
import logo from './logo.png'
import { withRouter } from "react-router";
import './style.css';

class HeaderComp extends React.Component {


    signupClickHandler = () => {
        this.props.history.push('/signup');
     }
     
    //  loginClickHandler = () => {
    //     this.props.history.push('/login');
    //  }

     loginClickHandler = () => {
        this.props.refreshAppModalState('Login',true)
     }

     userClickHandler = () =>{
        this.props.history.push('/dash')
     }
     
    render(){
    return (
        <div className="header">
            <img className="header-img" src={logo} alt="logo" />
            <ul className="header-nav">
                {(this.props.loggedIn==='loggedout')? <li onClick={this.loginClickHandler}>Login</li>:<li onClick={this.userClickHandler}>Hello {this.props.userInfo.first_name}</li>}
                {(this.props.loggedIn==='loggedout')? <li onClick={this.signupClickHandler}>Sign up</li>:<li></li>}
            </ul>
        </div>
    );
}
}


export default withRouter(HeaderComp);