import React from 'react';
import './index.scss';

function WhatSection() {
  return (
    <div id="what-section">
      <div className="wrap">
        <h1 id="header" className="primary-color">What can we do?</h1>

        <div className="section">
          <div className="box">
            <h2 className="reduceInterventions">Reduce Invasive Interventions</h2>
          </div>

          <div className="box">
            <h2 className="saveLives">Save More Lives</h2>
          </div>

          <div className="box">
            <h2 className="reduceCosts">Reduce Hospital Costs</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatSection;
