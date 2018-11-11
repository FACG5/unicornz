import React from 'react';
import './style.css'
import logo from './images/logo.png'
import unicorn from './images/unicorn.png'
import insta from './images/insta.png'
import twitter from './images/twitter.png'
import fb from './images/fb.png'


const FooterComp = ()=> {

     return (
        <div className = "footer"> 
            <div className = "footer-left">
                <img src={logo} alt="" />
                <ul>
                    <li>London.England</li>
                    <li>unicornz.uk</li>
                    <li>+44101010</li>
                </ul>

            </div>

            <img src={unicorn} alt="unicorn" />

            <div className = "footer-right">
                Follow us
                <div className = "ddd"> 
                    
                        <img src={fb} alt="" />
                        <img src={twitter} alt="" />
                        <img src={insta} alt="" />
                    
                </div>
            </div>

        </div>
     );

}


export default FooterComp;