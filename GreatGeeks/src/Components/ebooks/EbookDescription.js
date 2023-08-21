import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import "./ebooks.css";

import "bootstrap/dist/css/bootstrap.min.css";

import dummyEbooks from './dummyEbooks';

const Ebooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div>
      {/* Your Navbar component */}
      {/* ... */}
      <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', padding: '10px 0', marginTop: '90px' }}>
        EBOOKS
      </h1>
      <div className='ebooks-container'>
        {/* Types section */}
        <div className='types'>
          {/* ... */}
        </div>

        {/* List of ebooks */}
        <div className='ebooks-one'>
          <h2>Stories to save the world</h2>
          <div className="book-list">
            {dummyEbooks.map((book) => (
              <div key={book.id} className="book-item" onClick={() => handleBookClick(book)}>
                <img className="books-image" src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p>${book.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected ebook description */}
        {selectedBook && (
          <div className="book-details">
            <img className="books-image" src={selectedBook.image} alt={selectedBook.title} />
            <h3>{selectedBook.title}</h3>
            <p>Author: {selectedBook.author}</p>
            <p>Published Date: {selectedBook.published_date}</p>
            <p>Description: {selectedBook.description}</p>
            <p>Pages: {selectedBook.pages}</p>
            <p>Rating: {selectedBook.rating}</p>
            {/* You can add buttons here */}
            <div className="buttons">
              <button>Read Now</button>
              <button>Add to Cart</button>
            </div>
            <p>About the Author: {selectedBook.about_the_author}</p>
          </div>
        )}
      </div>
      {/* Your Footer component */}
      {/* ... */}
    </div>
  )
}

export default Ebooks;
