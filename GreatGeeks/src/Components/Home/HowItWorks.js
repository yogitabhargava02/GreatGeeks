import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const HowItWork = () => {
  const containerStyle = {
    overflow: 'hidden',
    width: '800px',
    height: '300px',
    flexShrink: '0',
    borderRadius: '10px',
    background: 'rgba(0, 197, 239, 0.71)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '20px',
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
    fontSize: '16px', // Increase font size for h1
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const h1Style = {
    fontSize: '30px', // Increase font size for h1
    marginBottom: '20px', // Add margin at the bottom of h1
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: '0',
    marginTop: '20px', // Add margin at the top of the ul element
  };

  const liStyle = {
    fontSize: '16px', // Increase font size for li elements
    marginBottom: '10px', // Add margin at the bottom of li elements
    display: 'flex',
    alignItems: 'center', // Align icon vertically with the text
  };

  const iconStyle = {
    marginRight: '10px', // Add space between icon and text
  };

  const buttonStyle = {
    width:' 190px',
    fontSize: '20px', // Increase font size for button
    padding: '10px 30px', // Add padding to the button
    borderRadius: '20px', // Add border radius to the button
    border: '2px solid black', // Add black border to the button
    background: 'rgba(0, 197, 239, 0.71)', // Set the background color of the button
    color: 'white',
  };

  const centerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <div style={centerContainerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h1 style={h1Style}>How it Works?</h1>
          <p>lorem Eiusmod officia ipsum irure cupidatat do do anim incididunt veniam proident anim pariatur. t dolore eiusmod.</p>
          <button style={buttonStyle}>SEE MORE</button>
        </div>
        <div style={columnStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              Find a project
            </li>
            <li style={liStyle}>
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              Find & Hire
            </li>
            <li style={liStyle}>
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              Award & Pay
            </li>
            <li style={liStyle}>
              <FontAwesomeIcon icon={faCheckCircle} style={iconStyle} />
              Work & Approve
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
