import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { selectColor } from '../features/configuratorSlice';
import ConfigBar from '../components/ConfigBar';

const ChoiceColor = () => {
  const btnStyle = {
    height: '35px'
  };

  // Sélection de l'état depuis le Redux store
  const configCar = useSelector(state => state.configurateur.configCar);
  const dispatch = useDispatch();

  // Fonction pour gérer le changement de couleur
  const handleColor = (colorOption) => {
    dispatch(selectColor(colorOption)); // Dispatch de l'action selectColor avec l'option de couleur
  };

  return (
    <>
      <Carousel>
        {configCar.carouselPhoto.selected.map((photo, index) => (
          <Carousel.Item key={index + 1}>
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
            onClick={() => handleColor(colorOption.option)}
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
