import React from 'react';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
import LegendImage from "../assets/images/LegedLogo.png";
import WorldImage from "../assets/images/World.png";
import "./LogoAndVisual.css";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap'  
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const LogoAndVisual = () => {
  return (
    <div>
      <div style={{ background: 'linear-gradient(to bottom, #177692, #09080D)', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', padding: '10px 0', marginTop: '90px' }}>
          Logo AND Visual
        </h1>

        <div className='LegendContainer' style={{ textAlign: 'center', padding: '10px 0', marginTop: '90px' }}>
          <img src={LegendImage} alt="legend" className='Legend' />
        </div>
<div className='parform'>
<Container>  
  <Row>  
    <Col>

<h1>Hello</h1>


    </Col>  
    <Col>
    <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='btn'>
      <Button className="Continue" variant="primary" type="submit">
       Continue
      </Button>
      <Button className="Contact" variant="primary" type="submit">
        Checkout
      </Button>
      </div>
      
    </Form>
    </Col>
  </Row>  
 
</Container> 

</div>
       
        <div className='WorldContainer'>
          <img className='WorldImage' src={WorldImage} alt="World" />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default LogoAndVisual;
