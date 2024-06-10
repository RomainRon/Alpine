import React from 'react';
import './App.css'; // Créez ce fichier pour y inclure vos styles globaux
import alpineImage from './images/alpine1.jpg'; // Importez l'image

const App = () => {
  const headerStyle = {
    backgroundColor: '#5F79FE', // Light blue color
    color: 'white',
    padding: '20px',
    textAlign: 'center'
  };

  const fullScreenImageStyle = {
    width: '100%',
    height: 'calc(100vh - 80px)', // Adjust height to exclude header
    objectFit: 'cover'
  };

  return (
    <div style={{ height: '100%' }}>
      <header style={headerStyle}>
        <h1>ACCUEIL</h1>
      </header>
      <img src={alpineImage} alt="Alpine Car" style={fullScreenImageStyle} />
    </div>
  );
};

export default App;