import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImgBlancGlacier from '../images/configurateur/couleurs/selection/blanc.jpg';
import ImgBleuAlpine from '../images/configurateur/couleurs/selection/bleu.jpg';
import ImgNoirProfond from '../images/configurateur/couleurs/selection/noir.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {color} from '../features/configuratorSlice'

const ChoiceColor = () => {
  const btnStyle = {
    height: '35px'
  };
  const configCar = useSelector(state => state.configurateur.configCar);
  const dispatch = useDispatch()
  const handleColor = () => {
    dispatch(color)
  }
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={configCar.photo}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={configCar.photo}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={configCar.photo}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="btn-group">
        <button className='btn' onClick={handleColor}>
          <img src={ImgBlancGlacier} style={btnStyle} alt="Blanc Glacier" />
        </button>
        <button className='btn' onClick={handleColor}>
          <img src={ImgBleuAlpine} style={btnStyle} alt="Bleu Alpine" />
        </button>
        <button className='btn' onClick={handleColor}>
          <img src={ImgNoirProfond} style={btnStyle} alt="Noir Profond" />
        </button>
      </div>
    </>
  );
};

export default ChoiceColor;
