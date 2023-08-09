import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faPen, faBullhorn, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Services.css';
const Services = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', // Five equal columns
    gridGap: '20px', // Increase the gap between the boxes
    justifyContent: 'center', // Center the grid horizontally
    alignItems: 'center', // Center the grid vertically
    padding: '20px',
    marginLeft: 'auto', // Add margin on the left
    marginRight: 'auto', // Add margin on the right
    maxWidth: '1100px', // Adjust the maximum width of the container
  };

  const gridBoxStyle = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr', // Two rows for each grid box
    gridGap: '20px', // Increase the gap between the rows
  };

  const boxStyle = {
    width: '380px',
    height: '300px',
    flexShrink: '0',
    borderRadius: '15px',
    background: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
  };

  const iconStyle = {
    fontSize: '48px',
    marginBottom: '10px',
  };
  const h1Style = {
    color: 'white',
    fontSize: '50px', // Increase font size for h1
    marginBottom: '20px', // Add margin at the bottom of h1
    display: 'flex', // Add display flex to center the content horizontally
    // justifyContent: 'center', // Center the content horizontally
    alignItems: 'center',
    marginLeft:' 110px' // Center the content vertically
  };
  return (
    <div style={{ marginTop: '20px' }}>
    <h1 style={h1Style}>Services</h1>
      <div style={containerStyle}>
      
        <div style={gridBoxStyle}>
          
          <Link to="/graphic-designing">
            <div style={boxStyle}>
              <FontAwesomeIcon icon={faPalette} style={iconStyle} />
              <h2>Graphic Designing</h2>
            </div>
          </Link>

          
          <Link to="/programming-tech">
            <div style={boxStyle}>
              <FontAwesomeIcon icon={faCode} style={iconStyle} />
              <h2>Programming & Tech</h2>
            </div>
          </Link>
        </div>

        {/* Second Grid Box */}
        <div style={gridBoxStyle}>
          {/* Wrap the box with Link and specify the destination URL in the to prop */}
          <Link to="/content-writing">
            <div style={boxStyle}>
              <FontAwesomeIcon icon={faPen} style={iconStyle} />
              <h2>Content Writing</h2>
            </div>
          </Link>

          
          <Link to="/marketing">
            <div style={boxStyle}>
              <FontAwesomeIcon icon={faBullhorn} style={iconStyle} />
              <h2>Marketing</h2>
            </div>
          </Link>
        </div>

       
        <Link to="/business">
          <div style={{ ...boxStyle, gridColumn: '5', gridRow: '1 / span 2', width: '390px', height: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
            <FontAwesomeIcon icon={faBriefcase} style={iconStyle} />
            <h2>Business</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
