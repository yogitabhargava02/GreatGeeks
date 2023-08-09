import React from 'react';
import homeImage from '../assets/images/home.png';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${homeImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '20px',
    zIndex: '1',
  };

  const headingStyle = {
    gridColumn: '1 / span 2',
    marginTop: '-150px',
    textAlign: 'left',
    fontWeight: '800',
    fontSize: '80px',
    marginLeft: '180px',
  };

  const subheadingStyle = {
    gridColumn: '1 / span 2',
    marginTop: '10px',
    textAlign: 'left',
    marginLeft: '180px',
    fontSize: '12px',
    fontWeight: '200',
  };

  const searchBarStyle = {
    height: '40px',
    width: '60%',
    backgroundColor: 'white',
    borderRadius: '20px',
    border: '2px solid white',
    gridColumn: '2',
    marginLeft: '120px',
    marginTop: '-120px',
    paddingLeft: '15px',
    display: 'flex',
    alignItems: 'center',
  };

  const searchIconStyle = {
    color: 'white',
    marginLeft: '10px',
  };

  return (
    
    <div style={containerStyle}>
      <Navbar />
      <div>
        <div style={headingStyle}>
          Make Bright <br />
          Ideas Happen
        </div>
        <div style={subheadingStyle}>
          Forget the best old rules. You can have the best people.<br /> Right now. Right here.
        </div>
      </div>

      <div style={searchBarStyle}>
        <input type="text" placeholder="Search..." style={{ border: 'none', width: '100%', paddingLeft: '10px' }} />
        <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
      </div>

      {/* Other components and content for the Home page */}
    </div>
  );
};

export default Home;
