import React from 'react';
import HeroComp from './HeroSection';
import MissionSection from './MissionSection';
import WhatWeDoComp from './WhatWeDoSection';
import './style.css';


class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <HeroComp />
        <MissionSection />

        <WhatWeDoComp />
      </div>
    );
  }
}

export default LandingPage;
