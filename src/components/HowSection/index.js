import React from 'react';
import './index.scss';

function HowSection() {
  return (
    <div id="how-section">
      <div className="wrap">
        <h1 id="header" className="primary-color">How are we doing this?</h1>

        <div className="box">
          <img alt="Wearable Tech" className="wearableImg" />

          <div className="text">
            <h6>Wearable Tech</h6>
            <p>
              Quick write-up talking about the wearable tech and a little bit about how it will help
              patients. Also add a little bit about the technology behind the wearable.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="text">
            <h6>AI Cloud Technology</h6>
            <p>
              Quick write-up talking about the wearable tech and a little bit about how it will help
              patients. Also add a little bit about the technology behind the wearable.
            </p>
          </div>

          <img alt="AI Cloud Tech" className="aiCloudTechImg" />
        </div>

        <div className="box">
          <img alt="Triage App" className="triageImg"  />

          <div className="text">
            <h6>Triage App</h6>
            <p>
              Quick write-up talking about the wearable tech and a little bit about how it will help
              patients. Also add a little bit about the technology behind the wearable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowSection;
