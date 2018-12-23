import React from 'react';
import './index.scss';
import ReduceInterventions from '../../assets/ambulance.png';
import SaveLives from '../../assets/holding-hands.png';
import Hospital from '../../assets/hospital.png';

function WhatSection() {
  return (
    <div id="what-section">
      <div className="wrap">
        <h1 id="header" className="primary-color">What can we do?</h1>

        <div className="section">
          <div className="box">
            <img src={ReduceInterventions} className="reduce" alt="Reduce Invasive Interventions" />
            <h2 className="reduceInterventions">Reduce Invasive Interventions</h2>
          </div>

          <div className="box">
            <img src={SaveLives} className="save" alt="Save More Lives" />
            <h2 className="saveLives">Save More Lives</h2>
          </div>

          <div className="box">
            <img src={Hospital} className="hospital" alt="Reduce Hospital Costs" />
            <h2 className="reduceCosts">Reduce Hospital Costs</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatSection;
