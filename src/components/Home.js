import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from "./Header"
import SectionImg from "./sectionImg"

const home = () => {
  return (
    <>
    <Header />
        <NavLink to={"/configurateur"}>configurateur</NavLink>
        <SectionImg/> 
        </>
  )
}

export default home