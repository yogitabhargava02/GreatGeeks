import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import FooterAbove from "../assets/images/FooterAbove.png";
import Logo from "../assets/images/Logo.png";

const Footer= () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: '0', 
    // height: '420px',
    flexShrink: '0',
    background: '#15233E',
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:'0',
  };

  const columnStyle = {
    margin:30,
    display: 'flex',
    flexDirection: 'column',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    margin:'0',
  };

  const listItemStyle = {
    fontSize: '16px',
    marginBottom: '5px',
  };

  const logoStyle = {
    width: '120px',
    height: '90px',
    marginLeft:'60px',
  };

  const socialMediaStyle = {
    display: 'flex',
    justifyContent: 'flex-end', // Align to the right
    color: 'white',
    alignItems: 'center',
    marginTop: 'auto', 
    marginLeft: '370%',
    marginBottom:'30px', // Shift icons to the right by 50 pixels
  };

  const socialIconStyle = {
    fontSize: '24px',
    margin: '5px',
    color: 'white',
  };
  const equalHeightContainer = {
    display: 'flex',
  };
  return (
    <div>
      <img src={FooterAbove} alt="about" width='100%' margin='0'/>
      <div style={containerStyle}>




      <div style={equalHeightContainer}>
        
      </div>
        <div style={columnStyle}>
          <h1 style={headingStyle}>Categories</h1>
          <ul style={listStyle}>
            <li style={listItemStyle}>Programming & Tech</li>
            <li style={listItemStyle}>Graphic & Design</li>
            <li style={listItemStyle}>Marketing</li>
            <li style={listItemStyle}>Business</li>
            <li style={listItemStyle}>Content Writing</li>
          </ul>
        </div>

        {/* Second Column */}
        <div style={columnStyle}>
          <h1 style={headingStyle}>About</h1>
          <ul style={listStyle}>
            <li style={listItemStyle}>Career</li>
            <li style={listItemStyle}>Press & News</li>
            <li style={listItemStyle}>Partnership</li>
            <li style={listItemStyle}>Privacy Policy</li>
            <li style={listItemStyle}>Terms of Services</li>
          </ul>
        </div>

        {/* Third Column */}
        <div style={columnStyle}>
          <h1 style={headingStyle}>Support</h1>
          <ul style={listStyle}>
            <li style={listItemStyle}>Help & Support</li>
            <li style={listItemStyle}>Trust & Safety</li>
            <li style={listItemStyle}>Selling</li>
            <li style={listItemStyle}>Buying</li>
            <li style={listItemStyle}>Guides</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div style={columnStyle}>
          <h1 style={headingStyle}>Community</h1>
          <ul style={listStyle}>
            <li style={listItemStyle}>Customer Success Stories</li>
            <li style={listItemStyle}>Community Hub</li>
            <li style={listItemStyle}>Forum</li>
            <li style={listItemStyle}>Events</li>
            <li style={listItemStyle}>Blog</li>
            <li style={listItemStyle}>Influencers</li>
            <li style={listItemStyle}>Affiliates</li>
            
            <li style={listItemStyle}>Podcast</li>

          </ul>
        </div>

        {/* <div style={columnStyle}>
          <h1 style={headingStyle}>More</h1>
          <ul style={listStyle}>
            <li style={listItemStyle}>Enterprise</li>
            <li style={listItemStyle}>Business</li>
            <li style={listItemStyle}>Inspired</li>
            <li style={listItemStyle}>Logo Maker</li>
            
          </ul>
        </div> */}
     
        {/* Logo */}
        <img src={Logo} alt="Logo" style={logoStyle} />

        {/* Social Media Links */}
        <div style={socialMediaStyle}>
          <FontAwesomeIcon icon={faFacebook} style={socialIconStyle} />
          <FontAwesomeIcon icon={faPinterest} style={socialIconStyle} />
          <FontAwesomeIcon icon={faLinkedin} style={socialIconStyle} />
          <FontAwesomeIcon icon={faInstagram} style={socialIconStyle} />
        </div>





        
      </div>
    </div>
  );
};

export default Footer;