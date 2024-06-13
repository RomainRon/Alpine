import React from 'react';
import Header from './html/Header';
import { useSelector } from 'react-redux';
import CarModels from './CarModels';
import ChoiceColor from './ChoiceColor';
import BlancGlacier from '../images/configurateur/couleurs/selection/blanc.jpg';
import BleuAlpine from '../images/configurateur/couleurs/selection/bleu.jpg';
import NoirProfond from '../images/configurateur/couleurs/selection/noir.jpg';
import JanteStandard from '../images/configurateur/jantes/selection/jante-standard.jpg';
import JanteSerac from '../images/configurateur/jantes/selection/jante-serac.jpg';
import JanteLegend from '../images/configurateur/jantes/selection/jante-legende.jpg';
import ConfigBar from './ConfigBar';

const Configurateur = () => {
  const pure = useSelector(state => state.configurateur.pure);
  
  return (
    <>
       <Header />
      <CarModels />
    </>
  );
}

export default Configurateur;
