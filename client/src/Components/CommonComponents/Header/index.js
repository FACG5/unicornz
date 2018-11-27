import React from 'react';
import logo from './logo.png'
import { withRouter } from "react-router";
import './style.css';
import alertify from 'alertifyjs';

class HeaderComp extends React.Component {


    signupClickHandler = () => {
        this.props.refreshAppModalState('Signup',true,70,85)
     }

     loginClickHandler = () => {
        this.props.refreshAppModalState('Login',true,40,60)
     }

     userClickHandler = () =>{
        this.props.history.push('/dash')
     }
     homehandler = () => {
        this.props.history.push('/');
     }

     signoutClickHandler = () =>{
         fetch('/logout').then(()=>{
             this.props.updateLoggingInfo();
             alertify.set('notifier','position', 'top-center');
             alertify.success('logged out successfuly')
         })
     }

    render(){
    return (
        <div className="header">
            <img className="header-img" src={logo} alt="logo" onClick={this.homehandler}/>
            <ul className="header-nav">
                {(this.props.loggedIn==='loggedout')? <li onClick={this.loginClickHandler}>Login</li>:<li onClick={this.userClickHandler}>Hello {this.props.userInfo.first_name}</li>}
                {(this.props.loggedIn==='loggedout')? <li onClick={this.signupClickHandler}>Sign up</li>:<li onClick={this.signoutClickHandler}>Sign out</li>}
            </ul>
        </div>
    );
}
}


export default withRouter(HeaderComp);