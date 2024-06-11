import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from "./Header"
import SectionImg from "./SectionImg"
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
        <Section3/>
        <BlueSection/>
        <ImgSlide/>
        </>
  )
}

export default home