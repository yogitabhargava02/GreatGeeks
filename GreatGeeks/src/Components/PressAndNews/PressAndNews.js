import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import NewsItem from './newsItem'; // Make sure you have the correct import path for NewsItem
import dummyNewsData from './newsData.json';

const PressAndNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const newsPerPage = 9;
  const newsData = dummyNewsData;

  // Calculate indexes of the first and last news items for the current page
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  // Function to chunk the newsData array into rows of three items each
  const chunkArray = (array) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += 3) {
      chunks.push(array.slice(i, i + 3));
    }
    return chunks;
  };

  const newsRows = chunkArray(currentNews);

  // Filter news based on search term
  const filteredNews = newsData.filter((news) => {
    const searchTermLower = searchTerm.toLowerCase();
    const newsDescriptionLower = news.description.toLowerCase();
    const newsPubDateFormatted = new Date(news.pubDate).toDateString().toLowerCase();

    return (
      newsDescriptionLower.includes(searchTermLower) ||
      newsPubDateFormatted.includes(searchTermLower)
    );
  });

  return (
    <>
      <div style={{ background: 'linear-gradient(to bottom, #177692, #09080D)', minHeight: '100vh', overflowX: 'hidden' }}>
        <Navbar />
        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '50px', padding: '10px 0', marginTop: '90px' }}>
          Latest News
        </h1>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '20px', marginLeft: '-15px', marginRight: '-15px' }}>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search news by title, date, or content"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '12px',
                width: '300px',
                borderRadius: '30px',
                border: 'none',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                marginRight: '10px',
              }}
            />
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'absolute',
                right: '45px',
              }}
              onClick={() => setSearchTerm('')}
            >
              <i className="fas fa-times-circle" style={{ fontSize: '20px', color: '#ccc' }}></i>
            </button>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'absolute',
                right: '15px',
              }}
              onClick={() => setSearchTerm('')}
            >
              <i className="fas fa-search" style={{ fontSize: '20px', color: '#177692' }}></i>
            </button>
          </div>
          <button
            style={{
              background: '#177692',
              color: 'white',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginLeft: '10px',
            }}
            onClick={() => setSearchTerm('')}
          >
            Clear
          </button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginLeft: '-15px', marginRight: '-15px' }}>
          {newsRows.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
              {row.map((news, index) => (
                <NewsItem key={index} news={news} />
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', margin: '20px' }}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ marginRight: '10px' }}
          >
            Previous
          </button>
          {newsRows.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                background: currentPage === index + 1 ? '#177692' : 'white',
                color: currentPage === index + 1 ? 'white' : '#177692',
                border: '2px solid #177692',
                borderRadius: '50%',
                padding: '8px 15px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
                margin: '0 5px',
              }}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredNews.length / newsPerPage)}
            style={{ marginLeft: '10px' }}
          >
            Next
          </button>
        </div>
       
      </div>
      <Footer />
     
    </>
  );
};

export default PressAndNews;
