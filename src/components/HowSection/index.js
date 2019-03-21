import React from 'react';
import './index.scss';
import Wearable from '../../assets/option_02.jpg';
import AI from '../../assets/AI_image.png';
import Triage from '../../assets/Rectangle.png';

function HowSection() {
  return (
    <div id="how-section">
      <div className="wrap">
        <h1 id="header" className="primary-color">The Future</h1>

        <div className="box">
          <div className="image wearable">
            <img src={Wearable} alt="Wearable Tech" className="wearableImg" rel="preload" />
          </div>
          
          <div className="text">
              <h6>Wearable Tech</h6>
              <p>
                Unique optical sensors non-invasively detect protein biomarkers present in the blood while 
                ECG sensors woven into comfortable fabric produce a 3D representation of heart data. 
              </p>
            </div>
        </div>

        <div className="box reverse">
          <div className="text">
            <h6>AI Cloud Technology</h6>
            <p>
              Continuously streamed data to our cloud based AI models allow for learned patterns and changes 
              in heart function to be detected and sent to on-call cardiologists.
            </p>
            <a href="/research">Learn More &gt;&gt;</a>
          </div>

          <div className="image ai">
            <img src={AI} alt="AI Cloud Tech" className="aiCloudTechImg" rel="preload" />
          </div>
        </div>

        <div className="box">
          <div className="image triage">
            <img src={Triage} alt="Triage App" className="triageImg" rel="preload"  />
          </div>

          <div className="text">
            <h6>Triage App</h6>
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
