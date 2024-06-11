import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';

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
