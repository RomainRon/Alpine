import React, { useState, useRef } from 'react';
import ImgSlideBlue from "../images/sources-homepage/conception/alpine-skin.jpg";
import './ImgSlide.css';

const ImgSlide = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // Initial position at 50%
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newSliderPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(Math.max(newSliderPosition, 0), 100)); // Limite entre 0 et 100%
    }
  };

  const handleMouseLeave = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseLeave);
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseLeave);
  };

  return (
    <div 
      className='alpine-slide-container' 
      ref={containerRef}
      onMouseDown={handleMouseDown}
    >
      <div className='background-image'></div>
      <div 
        className='foreground-image'
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={ImgSlideBlue} alt="Alpine Slide Blue" className='image' />
      </div>
    </div>
  );
}

export default ImgSlide;