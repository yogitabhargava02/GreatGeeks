import React from 'react';

const NewsItem = ({ news }) => {
  const { image, date, description } = news;

  // Create a new Date object by parsing the input date
  const dateObject = new Date(date);

  // Format the date to "D MMMM YYYY" format
  const formattedDate = `${dateObject.getDate()} ${getMonthName(dateObject.getMonth())} ${dateObject.getFullYear()}`;

  return (
    <div style={{ flex: '0 0 33%', boxSizing: 'border-box', margin: '10px' }}>
      <div style={{ maxWidth: '500px', marginBottom: '20px', padding: '10px', borderRadius: '20%' }}>
        {/* <img src={image} alt="News" style={{ width: '60%', height:'20%', maxHeight: '300px', objectFit: 'cover', borderRadius: '20%', marginBottom: '10px' }} /> */}
        <img src={image} alt="News" style={{ width: '60%', height: '200px', objectFit: 'cover', borderRadius: '20%', marginBottom: '10px' }} />

        <p style={{ fontWeight: 'bold', color: 'white' }}>{formattedDate}</p>
        <p style={{ fontWeight: '200', color: 'white', textAlign: 'justify', wordWrap: 'break-word' }}>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;

// Function to get the month name
const getMonthName = (month) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return monthNames[month];
};
