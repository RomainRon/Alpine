import React from 'react'; 
import alpineImage from '../images/alpine1.jpg'; // Importez l'image
const sectionImg = () => {
    const fullScreenImageStyle = {
            width: '100%',
            height: 'calc(100vh - 80px)', //Adjust height to exclude header
           
          };
  return (
    <img src={alpineImage} alt="Alpine Car" style={fullScreenImageStyle} />
)}

export default sectionImg