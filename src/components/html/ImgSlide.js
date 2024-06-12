import React, { useRef, useState } from 'react';
import ImgChassis from "../../images/sources-homepage/conception/alpine-bone.jpg";
import ImgSlideBlue from "../../images/sources-homepage/conception/alpine-skin.jpg";
import './ImgSlide.css';

const ImgSlide = () => {
  const [sliderPosition, setSliderPosition] = useState(50); 
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newSliderPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(Math.max(newSliderPosition, 0), 100));
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div 
      className='alpine-slide-container' 
      ref={containerRef}
      onMouseDown={handleMouseDown}
    >
      <div 
        className='background-image'
        style={{ width: `${sliderPosition}%` }}
      >
        <img src={ImgChassis} alt="Alpine Background" className='image' />
      </div>
      <div 
        className='foreground-image'
        style={{ width: `${100 - sliderPosition}%` }}
      >
        <img src={ImgSlideBlue} alt="Alpine Slide Blue" className='image' />
      </div>
    </div>
  );
}

export default ImgSlide;
