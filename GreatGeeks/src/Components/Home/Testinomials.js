import React from 'react';
import Testinomial from '../assets/images/Testinomial.png';

const Testinomials = () => {
  const containerStyle = {
    borderRadius: '20px',
    overflow: 'hidden',
    width: '800px',
    height: '300px',
    flexShrink: '0',
    background: 'rgba(0, 197, 239, 0.71)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  const centerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflowX: 'hidden', // Hide horizontal scrollbar
  };

  const imageStyle = {
    height: '300px',
    marginRight: '200px',
    borderRadius: '20px',
  };

  const rightColumnStyle = {
    gridColumn: '2',
    marginRight: '100px',
  };

  return (
    <div style={centerContainerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <img src={Testinomial} alt="Testimonial" style={imageStyle} />
        </div>
        <div style={{ ...columnStyle, ...rightColumnStyle }}>
          <p>
            Lorem et nostrud ipsum ad exercitation aliqua. Nostrud adipisicing voluptate commodo officia ipsum commodo
            cillum ad quis. Consectetur reprehenderit quis voluptate culpa anim. Fugiat duis nulla ad aliquip nulla
            cupidatat nostrud nisi nisi laboris do.
          </p>
          <br />
          <h2>- Raman Singh</h2>
        </div>
      </div>
    </div>
  );
};

export default Testinomials;
