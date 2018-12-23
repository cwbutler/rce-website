import React from 'react';
import './index.scss';
import image from '../../assets/ImagineTheUnexpected.png';

function LandingSplash() {
  return (
    <div id="landingSplash">
      <img src={image} alt="Imagine the Unexpected" rel="preload" />
    </div>
  );
}

export default LandingSplash;
