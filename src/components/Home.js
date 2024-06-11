import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from "./Header"
import SectionImg from "./SectionImg"
import Section2 from "./Section2"
import Section3 from "./Section3"
import BlueSection from './Bluesection'
import ImgSlide from '../components/ImgSlide';
import Section4 from './Section4'

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
        <NavLink to={"/configurateur"}>configurateur</NavLink>
        </>
  )
}

export default home