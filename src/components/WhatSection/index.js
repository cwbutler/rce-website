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
            <img src={ReduceInterventions} className="icon reduce" alt="Reduce Invasive Interventions" rel="preload" />
            <h2 className="subHeader reduceInterventions">Reduce Invasive Interventions</h2>
          </div>

          <div className="box">
            <img src={SaveLives} className="icon save" alt="Save More Lives" rel="preload" />
            <h2 className="subHeader saveLives">Save More Lives</h2>
          </div>

          <div className="box">
            <img src={Hospital} className="icon hospital" alt="Reduce Hospital Costs" rel="preload" />
            <h2 className="subHeader reduceCosts">Reduce Hospital Costs</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatSection;
