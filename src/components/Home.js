import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from "./Header"
import SectionImg from "./sectionImg"
import Section2 from "./Section2"
import Section3 from "./Section3"
import BlueSection from './Bluesection'
import ImgSlide from '../components/ImgSlide';

const home = () => {
  return (
    <>
    <Header />
        <NavLink to={"/configurateur"}>configurateur</NavLink>
        <SectionImg/> 
        <BlueSection/>
        <Section2/>
        <BlueSection/>
        <Section3/>
        <BlueSection/>
        <ImgSlide/>
        </>
  )
}

export default home