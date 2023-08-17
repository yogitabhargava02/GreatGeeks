

import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import "./Eblogs.css";
import RightImage from "../assets/images/right.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from './Blogs'; // Import the Blog component
import blogData from './blogData'; // Import your blog data
import DraggableSliderTabs from './DraggableSliderTabs';

const Eblogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('For You'); // Default category
  const categories = ['For You', 'Following', 'Space', 'Media', 'Sports', 'Music', 'Gaming', 'Language', 'Travel', 'Comedy', 'Share Market', 'Smartphones'];

  const filteredBlogs = blogData.filter(blog => blog.genre === selectedCategory);

  return (
    <div>
      <div style={{ background: 'linear-gradient(to bottom, #177692, #09080D)', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', padding: '10px 0', marginTop: '90px' }}>
          Eblogs
        </h1>
        <div className='searchbar-container'>
          <form className='search-form'>
            <input type="text" name="search" placeholder="Search.." />
            <button type="submit" className='search-button'>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div className="flex-container">
          <div className="flex-child left">
            <div className='center'>
              <h1>STAY CURIOUS</h1>
              <p>Discover stories, thinking, and expertise <br />from writers in any topic</p>
            </div>
          </div>

          <div className="flex-child right">
            <img src={RightImage} alt="RightImage" className='rightImage' />
          </div>
        </div>

     
        
        <DraggableSliderTabs setSelectedCategory={setSelectedCategory} categories={categories} selectedCategory={selectedCategory} />

<div className='blog-container'>
  {filteredBlogs.map((blog, index) => (
    <Blog
      key={index}
      title={blog.title}
      description={blog.description}
      date={blog.date}
      time={blog.time}
      genre={blog.genre}
      image={blog.image}
    />
  ))}
</div>

        <Footer />
      </div>
    </div>
  )
}

export default Eblogs;
