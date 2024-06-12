import React from 'react';
import Model1 from '../images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg';
import Model2 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg';
import './CarModels.css';
import { useDispatch, useSelector } from 'react-redux';
import { modele } from '../features/configuratorSlice';

const CarModels = () => {
  const Car1 = useSelector((state) => state.configurateur.pure)
  const Dispatch = useDispatch()
  const handleModele = (modeleIndex) => {
    Dispatch(modele({modeleIndex}))
  }
  
  const test = Car1.photo
  console.log(test, "HELLP"); 


  return (
    <div className="car-models-container">
      <div className="car-model">
        <img src={Model1} alt="Model 1" />
        <p>Modèle Legend</p>
        <button className="select-button" onClick={handleModele()}>Sélectionner</button>
      </div>
      <div className="car-model">
        <img src={Model2} alt="Model 2" />
        <p>Modèle Pure</p>
        <button className="select-button">Sélectionner</button>
      </div>
    </div>
  );
};

export default CarModels;