import './Landing.css';
import React from 'react';
import LandingSplash from '../components/LandingSplash';
import WhySection from '../components/WhySection';
import WhatSection from '../components/WhatSection';

class LandingPage extends React.PureComponent {
  render() {
    return (
      <div id="landing">
        <LandingSplash />
        <WhySection />
        <WhatSection />
      </div>
    );
  }
}

export default LandingPage;
