import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import dummyEbooks from './dummyEbooks';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import "./EbookDescription.css"; // Make sure this CSS file contains your styling

const EbookDescription = () => {
  const { id } = useParams();
  const selectedBook = dummyEbooks.find(book => book.id.toString() === id);
  const [hoverRating, setHoverRating] = useState(0);

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  // Create an array of star icons based on the rating
  const ratingStars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`star ${index + 1 <= hoverRating ? 'active' : ''}`}
      onMouseOver={() => setHoverRating(index + 1)}
      onMouseOut={() => setHoverRating(0)}
    >
      ★
    </span>
  ));

  return (
    <div className='ebook-description-container'>
      <Navbar />
      <div className='ebook-content'>
        <div className='section-one'>
          <div className='left-content'>
            <h2 className='ebook-title'>{selectedBook.title}</h2>
            <p className='ebook-author'>{selectedBook.author}</p>
            <p className='ebook-published-date'>{selectedBook.published_date}</p>
            <div className='section-two'>
             
              <span className='divider'></span>
              <div className='ebook-pages'>
                <div>Pages</div>
                <div>{selectedBook.pages}</div>
              </div>
            </div>


            <div className='btns'>
            <button className='btn'>RS.{selectedBook.price}</button>
            <button className='btn'>FREE SAMPLE</button>
            </div>
          
          </div>
          <div className='right'>
            <img className='books-image' src={selectedBook.image} alt={selectedBook.title} />
            <h4>Add to Wishlist</h4>
          </div>
        </div>
        <div className='aboutus-container'>
          <h3 className='heading'>About us</h3>
          <p className='paragraph'>{selectedBook.description}</p>
        </div>
        <button className='btn'>{selectedBook.type}</button>
        <div className='ratings-reviews'>
          <h3 className='heading'>Ratings & Reviews</h3>
          {/* Add reviews display here */}
        </div>
        <div className='about-the-author'>
          <h3 className='heading'>About the author</h3>
          <p className='paragraph'>{selectedBook.about_the_author}</p>
        </div>
        <div className='rate-the-book'>
          <h3 className='heading'>Rate this book</h3>
          <div className='rate-this-book-content'>
            <div className='stars'>
              {ratingStars}
            </div>
            <div >
              <button className='btn'>Write Review</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EbookDescription;
