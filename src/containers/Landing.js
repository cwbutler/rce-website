import './Landing.css';
import React from 'react';
import LandingSplash from '../components/LandingSplash';
import WhySection from '../components/WhySection';
import WhatSection from '../components/WhatSection';
import HowSection from '../components/HowSection';
import SubmitSection from '../components/SubmitSection';

class LandingPage extends React.PureComponent {
  render() {
    return (
      <div id="landing">
        <LandingSplash />
        <WhySection />
        <WhatSection />
        <HowSection />
        <SubmitSection />
      </div>
    );
  }
}

export default LandingPage;
