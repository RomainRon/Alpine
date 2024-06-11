import React from 'react';
import Img from '../images/sources-homepage/ALPINE-LEGENDE-1 1.png';
import Img2 from '../images/sources-homepage/road 1.png';

const Section2 = () => {
    const sectionStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const textAndImageStyle = {
        textAlign: 'center',
        marginRight: '20px' // Space between the first image and the second image
    };

    const imgStyle = {
        margin: '10px',
        padding: '90px'
        
    };
    const imgStyle2 = {
        margin: '10px',
        
    };
    return (
        <div style={sectionStyle}>
            <div style={textAndImageStyle}>
                <h3>L'A110 est l'expression pure des sensations Alpine. Elle joue sur la route et ses courbes avec une étonnante agilité.</h3>
                <img src={Img} style={imgStyle} alt="Alpine Légende" />
            </div>
            <img src={Img2} style={imgStyle2} alt="Road" />
        </div>
    );
};

export default Section2;
