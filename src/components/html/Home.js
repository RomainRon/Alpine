import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from "./Header"
import SectionImg from "./SectionImg"
import Section2 from "./Section2"
import Section3 from "./Section3"
import BlueSection from './Bluesection'
import ImgSlide from './ImgSlide';
import Section4 from './Section4'
import './Section4.css';


const home = () => {
  return (
    <>
        <Header />
        <SectionImg/> 
        <BlueSection/>
        <Section2/>
        <BlueSection/>
        <Section3/>
        <BlueSection/>
        <ImgSlide/>
        <BlueSection/>
        <Section4/>

        
 
        <div className='divButton'>
          <button type="button" class="btn btn-outline button">
            <NavLink className="text" to={"/configurateur"}>Configurer</NavLink>
          </button>
        </div>
    </>
  )
}

export default home