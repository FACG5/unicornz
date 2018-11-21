import React from 'react';

import logo from './logo.png'

import './style.css'

const HeaderComp = (props) => {

    return (
        <div className="header">
            <img className="header-img" src={logo} alt="logo" />
            <ul className="header-nav">
                <li>Login</li>
                <li>Sign up</li>

            </ul>
        </div>
    );
}


export default HeaderComp;