import React from 'react'
import Logo from '../images/pngwing.com_3.png'

const Header = () => {
    const headerStyle = {
        backgroundColor: '#5F79FE',
        color: 'white',
        padding: '20px',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const titleStyle = {
        flex: 1,
        textAlign: 'center'
    };

    const logoStyle = {
        width: 'auto'
    };

    return (
        <header style={headerStyle}>
            <div style={titleStyle}>
                <h1>ACCUEIL</h1>
            </div>
            <img src={Logo} style={logoStyle} alt="Logo" />
        </header>
    )
}

export default Header
