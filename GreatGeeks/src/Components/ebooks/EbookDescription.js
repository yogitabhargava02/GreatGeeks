import React from 'react';
import { useParams } from 'react-router-dom';
import dummyEbooks from './dummyEbooks';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import "./EbookDescription.css"
const EbookDescription = () => {
  const { id } = useParams();
  const selectedBook = dummyEbooks.find(book => book.id.toString() === id);


  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  return (
    <div>
    <div style={{ background: 'linear-gradient(to bottom, #177692, #09080D)', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
       
      
<div className='section-one'>
<h3>{selectedBook.title}</h3>
<img src={selectedBook.image}/>
</div>









      
      <p>Author: {selectedBook.author}</p>
      <p>Published Date: {selectedBook.published_date}</p>
      {/* Other ebook details */}
   
        <Footer />
      </div>
    </div>
   
  );
};

export default EbookDescription;
