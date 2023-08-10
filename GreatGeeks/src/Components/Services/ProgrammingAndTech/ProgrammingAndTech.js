// ProgrammingAndTech.js
import React from 'react';
import Footer from '../../Home/Footer';
import Navbar from '../../Home/Navbar';
// import { Slider } from '../slider/slider';
import Swiper from 'swiper';
import { Slider } from '../slider/Slider';
// import { sliderImages } from './slider/dummyData'; // Import sliderImages from dummyData
// import { sliderImages } from '../slider/dummyData';
const ProgrammingAndTech = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #177692, #09080D)', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', padding: '10px 0', marginTop: '90px' }}>
        Programming and Technology
      </h1>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '20px', marginLeft: '-15px', marginRight: '-15px' }}>
        <Slider /> {/* Pass sliderImages to the Slider component */}
      </div>
      
      <Footer />
    </div>
  );
};

export default ProgrammingAndTech;
