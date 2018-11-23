import React from 'react';
import HeroComp from './HeroSection'
import MissionSection from './MissionSection';
 
import './style.css'


class LandingPage extends React.Component  {

   render(){
    return (    
       <div > 
           <HeroComp />
           <MissionSection />

       </div>
    );
   }

}

export default LandingPage
