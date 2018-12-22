import React from 'react';
import './index.scss';

function LandingSplash() {
  return (
    <div id="why-section">
      <div className="wrap">
        <h1 id="header" className="primary-color">Why are we doing this?</h1>

        <div className="section">
          <div className="box">
            <h2>55 mins</h2>
            <h6>Avg. door to balloon</h6>
          </div>

          <div className="box">
            <h2>$20,000</h2>
            <h6>Avg. Hospilization Cost</h6>
          </div>

          <div className="box">
            <h2 className="primary-color">210,000</h2>
            <h6 className="primary-color">Repeat Heart Attacks Per Year</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSplash;
