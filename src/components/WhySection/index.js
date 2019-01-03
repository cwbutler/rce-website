import React from 'react';
import './index.scss';

function WhySection() {
  return (
    <div id="why-section">
      <div className="wrap">
        <h1 id="header" className="primary-color">The Impact</h1>

        <div className="section">
          <div className="box">
            <h2>75 mins</h2>
            <h6>Avg. Time To Intervention</h6>
          </div>

          <div className="box">
            <h2>$20K</h2>
            <h6>Avg. Hospitalization Cost</h6>
          </div>

          <div className="box">
            <h2 className="red">210,000</h2>
            <h6 className="red">Repeat Heart Attacks Per Year</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhySection;
