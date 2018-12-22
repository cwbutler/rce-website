import './Landing.css';
import React from 'react';
import LandingSplash from '../components/LandingSplash';
import WhySection from '../components/WhySection';
import WhatSection from '../components/WhatSection';
import HowSection from '../components/HowSection';

class LandingPage extends React.PureComponent {
  render() {
    return (
      <div id="landing">
        <LandingSplash />
        <WhySection />
        <WhatSection />
        <HowSection />
      </div>
    );
  }
}

export default LandingPage;
