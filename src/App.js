import React from 'react';
import './App.css'; // Créez ce fichier pour y inclure vos styles globaux
import alpineImage from './images/alpine1.jpg'; // Importez l'image
import alpineProfil from './images/AlpineProfil.png';

const App = () => {
  const headerStyle = 
  {
    backgroundColor: '#5F79FE', // Light blue color
    color: 'white',
    padding: '20px',
    textAlign: 'center'
  };

  const fullScreenImageStyle = 
  {
    width: '100%',
    height: 'calc(100vh - 80px)', // Adjust height to exclude header
  };

  const bgBlue = 
  {
    backgroundColor: '#5F79FE',
    padding: '50px',
  }

  const alpineProfileStyle =
  {
    width: '100%',
    height: 'calc(60vh - 30px)',
  }

  return (
    <>
      <div style={{ height: '100%' }}>
        <header style={headerStyle}>
          <h1>ACCUEIL</h1>
        </header>
        <img src={alpineImage} alt="Alpine Car" style={fullScreenImageStyle} />
      </div>
      <div style={{ height: '100%'}}>
        <div style={bgBlue}></div>
      </div>

      <div>
        <p>L'A110 est l'expression pure des sensations Alpine. Elle joue sur la route et ses courbes avec une étonnante agilité.</p>
      </div>
      <img src={alpineProfil} alt="Alpine Car" style={alpineProfileStyle} /> 
    </>
  );
};

export default App;