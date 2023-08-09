import React, { useState, useEffect } from 'react';
import LogoImage from '../assets/images/Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '15px',
    zIndex: '1',
    display: 'flex',
    alignItems: 'center',
    margin: '0',
    backgroundColor: isScrolled ? 'black' : 'transparent',
    transition: 'background-color 0.3s ease-in-out',
  };

  const linkStyle = {
    justifyContent: 'space-between',
    marginRight: '90px',
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <nav style={navbarStyle}>
      <div style={{ marginLeft: '30px', marginRight: '20px' }}>
        <img src={LogoImage} alt="Logo" style={{ width: '70px', height: '50px' }} />
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
        <li>
          <a href="#eblogs" style={linkStyle}>
            Eblogs
          </a>
        </li>
        <li>
          <a href="#eproducts" style={linkStyle}>
            Eproducts
          </a>
        </li>
        <li>
          <a href="#eservices" style={linkStyle}>
            Eservices
          </a>
        </li>
        <li>
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" style={linkStyle}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
