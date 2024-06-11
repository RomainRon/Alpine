import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';
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
      <div className='container'>
        {pure[0].couleur[0].color.map((item, index) => (
          <div key={index}>
            <img src={item.photo} alt={item.option} />
            <p>{item.option}</p>
            <p>{item.prix} €</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Configurateur;
