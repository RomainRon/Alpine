import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
import CarModels from './CarModels';
import BlancGlacier from '../images/configurateur/couleurs/selection/blanc.jpg';
import BleuAlpine from '../images/configurateur/couleurs/selection/bleu.jpg';
import NoirProfond from '../images/configurateur/couleurs/selection/noir.jpg';
import JanteStandard from '../images/configurateur/jantes/selection/jante-standard.jpg';
import JanteSerac from '../images/configurateur/jantes/selection/jante-serac.jpg';
import JanteLegend from '../images/configurateur/jantes/selection/jante-legende.jpg';

const Configurateur = () => {
  const pure = useSelector(state => state.configurateur.pure);
  
  return (
    <>
      <Header />
      <CarModels />
      <div className='row'>
        <div>
          <img src={pure[0].couleur[0].color[0].photo} alt={pure[0].couleur[0].color[0].option} />
          <p>{pure[0].couleur[0].color[0].option}</p>
          <p>{pure[0].couleur[0].color[0].prix} €</p>
        </div>
        <div>
          <img src={pure[0].couleur[0].color[1].photo} alt={pure[0].couleur[0].color[1].option} />
          <p>{pure[0].couleur[0].color[1].option}</p>
          <p>{pure[0].couleur[0].color[1].prix} €</p>
        </div>
        <div>
          <img src={pure[0].couleur[0].color[2].photo} alt={pure[0].couleur[0].color[2].option} />
          <p>{pure[0].couleur[0].color[2].option}</p>
          <p>{pure[0].couleur[0].color[2].prix} €</p>
        </div>
      </div>
    </>
  );
}

export default Configurateur;
