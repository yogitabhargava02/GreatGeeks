import React from 'react'
import Footer from '../../Home/Footer';
import Navbar from '../../Home/Navbar';
const BusinessConsultation = () => {
  return (
    <div>
    <div style={{ background: 'linear-gradient(to bottom, #177692, #09080D)', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', padding: '10px 0', marginTop: '90px' }}>
         BusinessConsultation
        </h1>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '20px', marginLeft: '-15px', marginRight: '-15px' }}>
         
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default BusinessConsultation;
