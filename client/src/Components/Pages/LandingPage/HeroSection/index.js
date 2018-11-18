import React from 'react';
import './style.css'
import spellingPng from './images/spelling.png'


const HeroComp = (props)=> {

     return (
        <div className = "hero"> 
            <div className = "mato">
                Where Girls Become the Future
            </div>
            <div className = "spelling">
                Unicornz: | 
                <img src={spellingPng} alt="" />
                <ul>
                    <li>1. Unique Magical Creatures</li>
                    <li>2. Privately held startup company valued at over $1 billion</li>
                </ul>
            </div>
        </div>
     );
}


export default HeroComp