import React from 'react'
import ImgBlancGlacier from '../images/configurateur/couleurs/selection/blanc.jpg';
import ImgBleuAlpine from '../images/configurateur/couleurs/selection/bleu.jpg';
import ImgNoirProfond from '../images/configurateur/couleurs/selection/noir.jpg';
const ChoiceColor = () => {
    const btn = {
        height: '35px'
    }
  return (
    <>
    <button className='btn'>
        <img src={ImgBlancGlacier} style={btn}></img>
        <img src={ImgBleuAlpine} style={btn}></img>
        <img src={ImgNoirProfond} style={btn}></img>
    </button>
    </>
  )
}

export default ChoiceColor