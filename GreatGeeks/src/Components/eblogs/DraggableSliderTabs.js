import React from 'react';
import './DraggableSliderTabs.css'; // Import the CSS file
const DraggableSliderTabs = ({ setSelectedCategory, categories, selectedCategory }) => {
  return (
    <div className="wrapper">
      <div className="icon">
        <i id="left" className="fa-solid fa-angle-left"></i>
      </div>
      <ul className="tabs-box">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`tab ${category === selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="icon">
        <i id="right" className="fa-solid fa-angle-right"></i>
      </div>
      <hr className='line'></hr>
    </div>
  );
};

export default DraggableSliderTabs;
