import React from 'react';
import Home from './Home';
import HowItWork from './HowItWorks';
import Services from './Services';
import Aboutus from './Aboutus';
import Testinomials from './Testinomials';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Main = () => {
  return (
    <div style={{ backgroundColor: '#09080E', height: '100vh', overflowY: 'auto' }}>
      <Home />
      <HowItWork />
      <Services />
      <Aboutus />
      <Testinomials/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Main;
