import React from 'react';
import Img from '../images/sources-homepage/ALPINE-LEGENDE-1 1.png';
import Img2 from '../images/sources-homepage/road 1.png';
import './Section2.css'; // Import the CSS file

const Section2 = () => {
    return (
        <div className="section">
            <div className="text-and-image">
                <h3>L'A110 est l'expression pure des sensations Alpine. Elle joue sur la route et ses courbes avec une étonnante agilité.</h3>
                <img src={Img} className="image" alt="Alpine Légende" />
            </div>
            <img src={Img2} className="image2" alt="Road" />
        </div>
    );
};

export default Section2;
