import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from "./Header"
import SectionImg from "./sectionImg"
import Section2 from "./Section2"
import Section3 from "./Section3"

const home = () => {
  return (
    <>
    <Header />
        <NavLink to={"/configurateur"}>configurateur</NavLink>
        <SectionImg/> 
        <Section2/>
        <Section3/>
        </>
  )
}

export default home