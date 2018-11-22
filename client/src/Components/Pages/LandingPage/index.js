import React from 'react';
import './style.css'
import HeroComp from './HeroSection'


class LandingPage extends React.Component  {

   render(){
    return (    
       <div > 
           <HeroComp history={this.props.history} />
       </div>
    );
   }

}

export default LandingPage
