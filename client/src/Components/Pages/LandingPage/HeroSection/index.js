import React from 'react';
import './style.css'
import start1 from './images/start1.svg';
import Button from '../../../CommonComponents/Button'
import { withRouter } from "react-router";

class HeroComp extends React.Component {

 onClickHandler = () => {
   this.props.history.push('/signup');
} 

addJobClickHandler = () =>{
  this.props.history.push('/WorkExpFill');
}

render(){
 return (

    <div className = "hero">
        <div className="left">
        <div className = "mato">
            Where Girls Become the Future
            <i className="fas fa-star top-left"></i>
            <i className="fas fa-star top-right"></i>
            <i className="fas fa-star bottom-left"></i>
            <i className="fas fa-star bottom-right"></i>
        </div>
        <p>"To Engage, Excite, & Empower girls to create the world they want
            to see, by connecting today’s business world to their innovation,
            creativity and increasing confidence."
            <br/>Marie-Clare, Unicornz
        </p>
        <button className="signup-button" type="button" onClick={this.onClickHandler}>Sign up!</button>
        <Button onClick={this.addJobClickHandler} value='Add a Job'/>
        </div>
          <div className="right">
            <img  className ="star1" src = {start1} alt = "" />
          </div>

    </div>

    
 );
}
}

export default withRouter(HeroComp)