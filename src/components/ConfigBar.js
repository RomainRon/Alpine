import React from 'react';
import './ConfigBar.css';

const ConfigBar = () => {

  const handleClick = () => {
    alert('Choix des jantes');
  };

  return (
    <div className="config-bar">
      <div className="config-item" onClick={handleClick}>
        <span>Choix des jantes</span>
      </div>
    </div>
  )
}

export default ConfigBar;