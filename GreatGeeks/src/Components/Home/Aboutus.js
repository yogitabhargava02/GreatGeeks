import React from 'react';
import About from '../assets/images/about.png';
const Aboutus = () => {
  const containerStyle = {
    // width: '1200px',
    // height: '900px',
    flexShrink: '0',
  
  
    display: 'grid', // Use CSS Grid for layout
    gridTemplateColumns: '1fr 1fr', // Two equal columns
    gridGap: '20px', // Gap between the columns
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const centerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Set the height of the container to fill the viewport vertically
  };

  return (
    <div style={centerContainerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h1>About us</h1>
          <p>lorem Eiusmod officia ipsum irure cupidatat do do anim incididunt veniam proident anim pariatur. t dolore eiusmod.</p>
          <button>Explore</button>
        </div>
        <div style={columnStyle}>
        <img src={About} alt="about" style={{ width: '500px', height: '493px' }} />
     
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
