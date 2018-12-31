import React from 'react';
import './index.scss';
import Wearable from '../../assets/wearable_image.png';
import AI from '../../assets/AI_image.png';
import Triage from '../../assets/Rectangle.png';

function HowSection() {
  return (
    <div id="how-section">
      <div className="wrap">
        <h1 id="header" className="primary-color">The Future</h1>

        <div className="box">
          <img src={Wearable} alt="Wearable Tech" className="wearableImg" rel="preload" />

          <div className="text">
            <h6>01 <br />Wearable Tech</h6>
            <p>
              Unique optical sensors non-invasively detect protein biomarkers present in the blood while 
              ECG sensors woven into comfortable fabric produce a 3D representation of heart data. 
            </p>
          </div>
        </div>

        <div className="box reverse">
          <div className="text">
            <h6>02 <br />AI Cloud Technology</h6>
            <p>
              Continuously streamed data to our cloud based AI models allow for learned patterns and changes 
              in heart function to be detected and sent to on-call cardiologists.
            </p>
          </div>

          <img src={AI} alt="AI Cloud Tech" className="aiCloudTechImg" rel="preload" />
        </div>

        <div className="box">
          <img src={Triage} alt="Triage App" className="triageImg" rel="preload"  />

          <div className="text">
            <h6>03 <br />Triage App</h6>
            <p>
              Our Triage Workflow exchanges recorded data with the cardiologist when a critical heart event is detected, 
              allowing for an instant, life-saving decision and patient notification to seek immediate treatment. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowSection;
