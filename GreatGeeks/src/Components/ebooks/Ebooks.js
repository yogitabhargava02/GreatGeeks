import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import "./ebooks.css";
import { Link } from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";


import dummyEbooks from './dummyEbooks';

const Ebooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div>
      <div style={{ background: 'linear-gradient(to bottom, #177692, #09080D)', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', padding: '10px 0', marginTop: '90px' }}>
          EBOOKS
        </h1>
        <div className='ebooks-container'>
          <div className='types'>
            <div className='type'>ebooks</div>
            <div className='type'>audiobooks</div>
            <div className='type'>comics</div>
          </div>

          <div className='ebooks-one'>
            <h2>Stories to save the world</h2>
            <div className="book-list">
              {dummyEbooks.map((book) => (
                <Link
              key={book.id}
              to={{
                pathname: `/ebook/${book.id}`,
                state: { selectedBook: book }
              }}
              className="book-item"
            >
                  <img className="books-image" src={book.image} alt={book.title} />
                  <h3>{book.title}</h3>
                  {/* <p>${book.price}</p> */}
                </Link>
              ))}
            </div>
           
          </div>
          <div className='ebooks-one'>
            <h2>Stories to save the world</h2>
            <div className="book-list">
              {dummyEbooks.map((book) => (
                <Link
              key={book.id}
              to={{
                pathname: `/ebook/${book.id}`,
                state: { selectedBook: book }
              }}
              className="book-item"
            >
                  <img className="books-image" src={book.image} alt={book.title} />
                  <h3>{book.title}</h3>
                  {/* <p>${book.price}</p> */}
                </Link>
              ))}
            </div>
           
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Ebooks;
