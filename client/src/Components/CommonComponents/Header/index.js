import React from 'react';
import './style.css'
import logo from './logo.png'


const HeaderComp = (props)=> {

     return (
        <div className = "header"> 
            <img className = "header-img" src={logo} alt="logo"/>
            <ul className="header-nav">
                <li onClick={()=>{}}>Login</li>
                <li onClick={()=>{}}>About Us</li>
                <li onClick={()=>{}}>Work Experience</li>
                <li onClick={()=>{}}>Home</li>
            </ul>
        </div>
     );

}


export default HeaderComp;