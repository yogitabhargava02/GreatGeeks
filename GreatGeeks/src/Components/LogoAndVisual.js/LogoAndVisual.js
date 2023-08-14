import React, { useState } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import LegendImage from "../assets/images/LegendImage.png";
import "./LogoAndVisual.css";
import MapImage from "../assets/images/MapImage.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const LogoAndVisual = () => {
  const [faqVisibility, setFaqVisibility] = useState({});

  const toggleFaqVisibility = (faqIndex) => {
    setFaqVisibility((prevState) => ({
      ...prevState,
      [faqIndex]: !prevState[faqIndex],
    }));
  };

  const faqs = [
    {
      question: "What is Copyrights Document Add on (gig extra)?",
      answer:
        "The Copyrights Document Add-on (gig extra) provides you with the legal documentation necessary to protect your logo design. It includes the rights and permissions related to your logo's usage, distribution, and reproduction. This add-on is particularly important if you plan to trademark your logo or use it for commercial purposes.",
    },
    {
      question: "What is Social Media Kit?",
      answer:
        "The Social Media Kit is a package that includes optimized versions of your logo for various social media platforms. It ensures that your logo maintains its quality and proportions across different social media profiles. The kit typically includes profile pictures, cover images, and banners tailored to platforms like Facebook, Twitter, Instagram, and LinkedIn.",
    },
    {
      question: "How long does it take for a revision?",
      answer:
        "The duration for a revision depends on the complexity of the changes you request. Minor changes can be completed within 1-2 business days, while more intricate modifications may take longer. However, I strive to provide you with the revised logo design as quickly as possible without compromising quality.",
    },
    {
      question: "Do you design and develop websites?",
      answer:
        "Currently, my services are focused on logo design and visual branding. I do not provide website design or development services. However, if you're looking to create a consistent visual identity for your brand, I can help you design a logo that aligns with your website's theme and aesthetics.",
    },
    {
      question:
        "I see a lot of orders in queue. Will this affect my order delivery time?",
      answer:
        "The orders you see in the queue are for various design services, and each project has its own timeline and priority. I am committed to delivering your logo design within the agreed-upon timeframe. Rest assured that your order will be completed according to the schedule we've discussed.",
    },
    {
      question: "What is vector and source file?",
      answer:
        "A vector file is a type of graphic that uses mathematical equations to define each element in the image. It can be scaled infinitely without losing quality. The source file, often provided in formats like AI or PSD, contains all the design elements, layers, and editable components used to create the logo. Having the source file allows for future modifications and scalability.",
    },
    {
      question: "What is a revision?",
      answer:
        "A revision is a modification made to the logo design based on your feedback and preferences. It could involve changes in colors, fonts, layout, or any other design element. I offer a certain number of revisions as part of the package, and additional revisions may be available at an extra cost.",
    },
    {
      question: "How is the premium package beneficial?",
      answer:
        "The premium package offers a comprehensive set of features and services. You'll receive multiple original logo concepts, unlimited revisions until you're satisfied, a full logo pack with various file formats, and fast delivery. This package is designed to provide you with a complete branding solution tailored to your needs.",
    },
  ];

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(180deg, #177692 0%, #09080D 50.39%",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "50px",
            padding: "10px 0",
            marginTop: "90px",
          }}
        >
          LOGO AND VISUAL
        </h1>

        <div
          className="legend-container"
          style={{
            textAlign: "center",
            padding: "10px 0",
            marginTop: "45px",
            marginLeft: "250px",
          }}
        >
          <img
            className="legend-image"
            src={LegendImage}
            alt="legendImage"
          ></img>
        </div>
        <div className="paraform">
          <div class="row">
            <div class="col">
              <div>
                <h6 className="question">
                  <b>What is the Category?</b>
                </h6>
                <p className="ans">
                  loremNulla excepteur tempor tempor culpa dolore. Id veniam eu
                  elit ea adipisicing in enim. Officia minim ea eiusmod aliqua
                  magna laborum proident anim aute ad nostrud. Nostrud duis aute
                  est eu sit culpa reprehenderit enim mollit tempor veniam.
                  Voluptate deserunt minim do mollit aliquip fugiat irure
                  proident officia minim tempor non.
                </p>
              </div>
              <div>
                <h6 className="question">
                  <b>Why you choose us?</b>
                </h6>
                <p className="ans">
                  express delivery within 24 hrs or less. Colour options
                  according to your needs. Satisfaction Guaranteed Money back
                  Guarantee Easy communication
                </p>
              </div>
              <div>
                <h6 className="question">
                  <b>What will you get from us ?</b>
                </h6>
                <p className="ans">
                  Outstanding customer support Fresh unique ,Professional , and
                  modern Logo concepts Unlimited revision until you satisfy Full
                  logo pack including AI, PNG, JPEG, SVG, PDF etc. High quality
                  work 100% Moneyback guarantee if you are not satisfied 24hrs
                  Fast delivery
                </p>
              </div>
            </div>
            <div class="col">
              <div className="form-container">
                <Form className="form">
                  <Form.Group className="mb-3">
                    <Form.Text className="rs" style={{ textAlign: "center" }}>
                      Rs.3000
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <div className="save-container">
                      <Form.Text className="save">
                        Save up to <span className="discount">10%</span> with
                        Subscribe to Save
                      </Form.Text>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <div className="para2-container">
                      <Form.Text className="para2">
                        2 Original Logo Designs{" "}
                        <b>
                          {" "}
                          <span className="files">
                            JPG File ,PNG transparent File
                          </span>
                        </b>
                      </Form.Text>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" style={{ display: "flex" }}>
                    <FontAwesomeIcon icon={faRotate} className="icon" />

                    <Form.Text className="icon-text">2 Days delivery</Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" style={{ display: "flex" }}>
                    <FontAwesomeIcon icon={faRotate} className="icon" />

                    <Form.Text className="icon-text">2 Days delivery</Form.Text>
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
            <h2 style={{ color: "white" }}>
              let's connect with the <span className="world">world</span>
            </h2>
          </div>
          <div className="map-container">
            <img className="map-image" src={MapImage} alt="mapimage" />
          </div>
        </div>

        <div className="faq-container">
          <div className="faqheading">
            <h5 className="FAQs">FAQ</h5>
          </div>
          <ul style={{ listStyleType: "none" }}>
            {faqs.map((faq, index) => (
              <li key={index}>
                <h6 onClick={() => toggleFaqVisibility(index)}>
                  {faq.question}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`icon-down ${
                      faqVisibility[index] ? "visible" : ""
                    }`}
                  />
                </h6>

                {faqVisibility[index] && (
                  
                    <p>{faq.answer}</p>
                 
                )}
                <hr />
              </li>
            ))}
          </ul>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LogoAndVisual;
