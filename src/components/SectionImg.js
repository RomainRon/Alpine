import React from 'react'; 
import alpineImage from '../images/alpine1.jpg'; 
const sectionImg = () => {
    const fullScreenImageStyle = {
            width: '100%',
            height: 'calc(100vh - 80px)',
           
          };
  return (
    <img src={alpineImage} alt="Alpine Car" style={fullScreenImageStyle} />
)}

export default sectionImg