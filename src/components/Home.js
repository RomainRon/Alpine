import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from "./Header";
import SectionImg from "./SectionImg";
import Section2 from "./Section2";
import Section3 from "./Section3";
import BlueSection from './BlueSection';
import ImgSlide from '../components/ImgSlide';
import Section4 from './Section4';
import './Home.css'; 

const Home = () => {
  return (
    <>
      <Header />
      <SectionImg />
      <BlueSection />
      <Section2 />
      <BlueSection />
      <Section3 />
      <BlueSection />
      <ImgSlide />
      <BlueSection />
      <Section4 />

      <div className='divButton'>
        <button type="button" className="button">
          <NavLink className="text" to={"/configurateur"}>Configurer</NavLink>
        </button>
      </div>
    </>
  );
}

export default Home;