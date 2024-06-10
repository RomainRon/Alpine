import React from 'react'
import { NavLink } from 'react-router-dom';

const header = () => {
    const headerStyle = {
        backgroundColor: '#5F79FE', // Light blue color
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      };



      
  return (
    <header style={headerStyle} > <h1>ACCUEIL</h1>
    </header>
  )
}

export default header