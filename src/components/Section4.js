import React from 'react';
import ImgAlpineConfig from '../images/AlpineConfig.png';


const Section4 = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '80vh',
    margin: '0 auto'
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto' 
  };

  return (
    <div style={containerStyle}>
      <img src={ImgAlpineConfig} style={imageStyle} alt="Alpine Config"/>
    </div>
  )
}

export default Section4;