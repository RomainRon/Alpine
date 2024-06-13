import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { selectColor } from '../features/configuratorSlice';
import ConfigBar from '../components/ConfigBar';


const ChoiceColor = () => {
  const btnStyle = {
    height: '35px'
  };
  const configCar = useSelector(state => state.configurateur.configCar);

  const dispatch = useDispatch();

  const handleColor = (colorIndex) => {
    dispatch(selectColor(colorIndex));
  };

  return (
    <>
      <Carousel>
        {configCar.carouselPhoto.map((photo, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={photo}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="btn-group">
        {configCar.color.map((colorOption, index) => (
          <button
            key={index}
            className='btn'
            onClick={() => handleColor(index)}
          >
            <img src={colorOption.photo} style={btnStyle} alt={colorOption.option} />
          </button>
        ))}
      </div>
      <ConfigBar />
    </>
  );
};

export default ChoiceColor;
