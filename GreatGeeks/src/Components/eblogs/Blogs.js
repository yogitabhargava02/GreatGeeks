import React from 'react';
import './Blogs.css'; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ title, description, date, time, genre, image }) => {
  return (
    <div className="blog">
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="metadata">
          <span>{date}</span>
          <span>{time} min read</span>
          <span className='genre'>{genre}</span>
          <span className='icons'>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faBookmark}/>
          
          </span>
        </div>
      </div>
      <div className="image-container">
        <img className="blogImage" src={image} alt={title} />
      </div>
    </div>
  );
};

export default Blog;
