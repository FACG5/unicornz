import React from 'react';
import './style.css'
import spellingPng from './images/spelling.png'
import MainButton from '../../../CommonComponents/Button'

class HeroComp extends React.Component  {

     onClickHandler = () => {
       this.props.history.push('/signup');
    }

    render(){
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
            <MainButton  value="Join us" onClick = {this.onClickHandler}/>
        </div>
     );
    }
}

export default HeroComp