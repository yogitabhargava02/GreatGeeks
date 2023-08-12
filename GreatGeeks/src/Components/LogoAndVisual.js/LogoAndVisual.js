import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import LegendImage from "../assets/images/LegendImage.png";
import "./LogoAndVisual.css";
import MapImage from "../assets/images/MapImage.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";



  const LogoAndVisual = () => {
//     const [expandedItems, setExpandedItems] = useState([]);
  
//     const toggleExpand = (index) => {
//       if (expandedItems.includes(index)) {
//         setExpandedItems(expandedItems.filter(itemIndex => itemIndex !== index));
//       } else {
//         setExpandedItems([...expandedItems, index]);
//       }
//     };
  return (
    <div>
    <div style={{ background: 'linear-gradient(180deg, #177692 0%, #09080D 50.39%', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />
      <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', padding: '10px 0', marginTop: '90px' }}>
      LOGO AND VISUAL
      </h1>

      <div className="legend-container" style={{ textAlign: 'center',  padding: '10px 0', marginTop: '45px', marginLeft:'250px' }}>
      <img  className="legend-image" src={LegendImage} alt="legendImage"></img>
       
      </div>
<div className="paraform">
<div class="row">
    <div class="col">
   <div>
    <h6 className="question"><b>What is the Category?</b></h6>
    <p className="ans">loremNulla excepteur tempor tempor culpa dolore. Id veniam eu elit ea adipisicing in enim. Officia minim ea eiusmod aliqua magna laborum proident anim aute ad nostrud. Nostrud duis aute est eu sit culpa reprehenderit enim mollit tempor veniam. Voluptate deserunt minim do mollit aliquip fugiat irure proident officia minim tempor non.</p>
   </div>
   <div>
    <h6 className="question"><b>Why you choose us?</b></h6>
    <p className="ans">express delivery within 24 hrs or less.
Colour options according to your needs.
Satisfaction Guaranteed
Money back Guarantee
Easy communication


</p>
   </div>
   <div>
    <h6 className="question"><b>What will you get from us ?</b></h6>
    <p className="ans">Outstanding customer support
Fresh unique ,Professional , and modern Logo concepts 
Unlimited revision until you satisfy
Full logo pack including AI, PNG, JPEG, SVG, PDF etc.
High quality work
100% Moneyback guarantee  if you are not satisfied
24hrs Fast delivery</p>
   </div>
    </div>
    <div class="col">
    <div className="form-container">
    <Form className='form'>
      <Form.Group className="mb-3">
        
        <Form.Text className="rs" style={{textAlign:"center"}}>
        Rs.3000
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
      <div className="save-container" >
      <Form.Text className="save" >
     
      Save up to  <span className="discount">10%</span> with Subscribe to Save
      
        </Form.Text>
        </div>
      </Form.Group>


      <Form.Group className="mb-3">
      <div className="para2-container" >
      <Form.Text className="para2" >
      2 Original Logo Designs <b> <span className="files">JPG File ,PNG transparent File</span></b>
     
      
        </Form.Text>
        </div>
      </Form.Group>

      <Form.Group className="mb-3" style={{display: "flex"}}>
    
      <FontAwesomeIcon icon={faRotate} className="icon"/>

        <Form.Text className="icon-text">
        2 Days delivery
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" style={{display: "flex"}}>
    
    <FontAwesomeIcon icon={faRotate} className="icon"/>

      <Form.Text className="icon-text">
      2 Days delivery
      </Form.Text>
    </Form.Group>





    <Form.Group className="mb-3">
    <Form.Text className="mb-3 included">
  What's included
</Form.Text>
    </Form.Group>

    
   
      <Button className="mb-3 btn" type="submit">
      
       Continue
      </Button>
      <Button className="btn" type="submit">
        Checkout
      </Button>
    
      
    </Form>
    </div>
   
  
  </div>
  </div>
</div>  
 
      <div className="map-container">
      <div className="map-heading">
        <h2 style={{color:"white"}}>let's connect with the <span className="world">world</span></h2>
      </div>
<div className="map-container">
<img className="map-image" src={MapImage} alt="mapimage"/>
</div>
      </div>


 



      <div className="faq-container">
      <div className="faqheading">
      <h5 className="FAQs">
    
       
          FAQ
        </h5>
        </div>
        <ul style={{ listStyleType: 'none', marginBottom:"-20%"}}>
  <li><h6>What is Copyrights Document Add on (gig extra)?</h6>
  <hr className="faqline"/>
            </li>
  <li><h6>What is Social Media Kit?</h6> <hr className="faqline"/></li>
  <li><h6>How long does it take for a revision?</h6> <hr className="faqline"/></li>
  <li><h6>Do you design and develop websites?</h6> <hr className="faqline"/></li>
  <li><h6>I see a lot of orders in queue. Will this affect my order delivery time?</h6> <hr className="faqline"/></li>
  <li><h6>What is vector and source file?</h6> <hr className="faqline"/></li>
  <li><h6>What is a revision?</h6> <hr className="faqline"/></li>
  <li><h6>How is the premium package beneficial?</h6> <hr className="faqline"/></li>
</ul>

      </div>
      
      <Footer />
    </div>
    </div>
  )
}

export default LogoAndVisual;
