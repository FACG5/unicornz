import React from 'react';
import './style.css'
import girl from './images/girl.jpg';

class HeroComp extends React.Component {

 onClickHandler = () => {
   this.props.history.push('/signup');
}

render(){
 return (

    <div className = "missionsection">
         {/* <img className="missionImage" src={girl} alt= ''/> */}
         <div className="rgba">
          <div className="content">
          <div className = "mato1">
            <p>Our Mission</p>
            <i className="fas fa-star top-left"></i>
            <i className="fas fa-star top-right"></i>
            <i className="fas fa-star bottom-left"></i>
            <i className="fas fa-star bottom-right"></i>
        </div>
        <p className="mission-p">
          Unicornz helps girls achieve the creative confidence to be
          the very best they can, in whatever field they choose, with
          a view to becoming the future leaders and innovators of
          business and the world they want to shape.</p>
          </div>
         </div>
    </div>

    
 );
}
}

export default HeroComp


