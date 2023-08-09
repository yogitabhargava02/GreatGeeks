import React from 'react';

const ContactUs = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'white',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #ccc',
    color: 'white',
  };

  const centerColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };
  const h1Style = {
    color: 'white',
    fontSize: '50px', // Increase font size for h1
    marginBottom: '20px', // Add margin at the bottom of h1
    display: 'flex', // Add display flex to center the content horizontally
    // justifyContent: 'center', // Center the content horizontally
    alignItems: 'center',
    marginLeft:' 390px' // Center the content vertically
  };
  return (
    <>

 
    <h1 style={h1Style}>Contact us </h1>
    <div style={containerStyle}>
   
      <div style={columnStyle}>
        <input type="text" id="firstName" placeholder='Name' style={inputStyle} />
        <input type="text" id="lastName" placeholder='Last Name' style={inputStyle} />
        <input type="email" id="email" placeholder='Email' style={inputStyle} />
        <textarea id="message" rows="4" placeholder='How may we help you?' style={inputStyle}></textarea>
        <button>Send Message</button>
      </div>

      <div style={centerColumnStyle}>
        <h1>Need Specific Help?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu mi rutrum, consectetur massa quis, bibendum
          nibh. Suspendisse egestas est a lacus ultricies, eget accumsan metus faucibus.
        </p>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
