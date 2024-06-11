import React from 'react';
import Presentation_desktop from '../images/sources-homepage/A110/Presentation_desktop-1.png'


const Section3 = () => {
    const fullScreenImageStyle = {
        width: '100%',
        height: '100%', //Adjust height to exclude header
       
      };
  return (
    <img src={Presentation_desktop} alt="Alpine Car" style={fullScreenImageStyle} />
  )
}

export default Section3