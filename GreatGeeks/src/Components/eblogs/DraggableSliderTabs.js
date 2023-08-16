import React from 'react';
import './DraggableSliderTabs.css'; // Import the CSS file
const DraggableSliderTabs = () => {
  return (
    <div className="wrapper">
      <div className="icon">
        <i id="left" className="fa-solid fa-angle-left"></i>
      </div>
      <ul className="tabs-box">
        <li className="tab">For You</li>
        <li className="tab active">Following</li>
        <li className="tab">Space</li>
        <li className="tab">Media</li>
        <li className="tab">Sports</li>
        <li className="tab">Music</li>
        <li className="tab">Gaming</li>
        <li className="tab">Language</li>
        <li className="tab">Travel</li>
       
        <li className="tab">Comedy</li>
        <li className="tab">Gaming</li>
        <li className="tab">Share Market</li>
        <li className="tab">Smartphones</li>
       
      </ul>
      <div className="icon">
        <i id="right" className="fa-solid fa-angle-right"></i>
      </div>
      <hr className='line'></hr>
    </div>
  );
};

export default DraggableSliderTabs;
