import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import "./EbookDescription.css";

import { dummySimilarEbooks } from "./dummySimilarEbooks";
import dummyEbooks from "./dummyEbooks";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { dummyReviews } from "./dummyReviews";

const EbookDescription = () => {
  const { id } = useParams();
  const selectedBook = dummyEbooks.find((book) => book.id.toString() === id);

  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  const handleStarHover = (rating) => {
    setHoverRating(rating);
  };

  const handleStarClick = (rating) => {
    setRating(rating);
  };

  const renderStars = () => {
    const stars = [];
    for (let star = 1; star <= 5; star++) {
      stars.push(
        <FontAwesomeIcon
          key={star}
          icon={star <= (hoverRating || rating) ? faStar : faStar}
          className="star-icon"
          onMouseEnter={() => handleStarHover(star)}
          onMouseLeave={() => handleStarHover(0)}
          onClick={() => handleStarClick(star)}
        />
      );
    }
    return stars;
  };

  return (
    <div className="ebook-description-container">
      <Navbar />
      <div className="ebook-content">
        <div className="section-one">
          <div className="left-content">
            <h2 className="ebook-title">{selectedBook.title}</h2>
            <div className="ebook-pages">
              {/* <div>Pages</div> */}
              {/* <div>{selectedBook.pages}</div> */}
            </div>
            <div className="btns">
              <button className="btn">RS.{selectedBook.price}</button>
              <button className="btn">FREE SAMPLE</button>
            </div>
          </div>
          <div className="right">
            <img
              className="books-image"
              src={selectedBook.image}
              alt={selectedBook.title}
            />
<div className="add">
<p>  <FontAwesomeIcon
              icon={faBookmark} // Use faBookmark for the save icon
              className="bookmark-icon"
         /> Add to Wishlist</p>
            
           
</div>
           
          
          </div>
        </div>
        <div className="aboutus-container">
          <h3 className="heading">About the Book</h3>
          <p className="paragraph">{selectedBook.description}</p>
        </div>
        <button className="btn">{selectedBook.type}</button>

        <div className="ratings-reviews">
          <h3 className="heading">Ratings & Reviews</h3>

          <div className="rating-review-1">
            <div className="rating-left">
              <h1 className="heading">4.4</h1>
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon
                    key={star}
                    icon={
                      star <= Math.round(selectedBook.averageRating)
                        ? faStar
                        : faStar
                    }
                    className="star-icon"
                  />
                ))}
              </div>
              <p>{selectedBook.totalReviews} reviews</p>
            </div>

            <div className="progress-right">
            
              <div className="progress">
              
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "2%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "20%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "15%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="review-container">


          <div className="review-left">
  {dummyReviews.map((review, index) => (
    <div key={index} className="review-entry">
      <div className="review-header">
        <h6 className="username">{review.username}</h6>
       
      </div>
      <div className="user-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={star <= review.rating ? faStar : faStar}
            className="user-stars"
          />
        ))}
      
      </div>
      <h6 className="userdate">{review.date}</h6>
      <p className="review-description">{review.description}</p>
    </div>
  ))}
</div>







          
<div className="review-right">
  <h2 className="similar-ebooks-heading">
    Similar Ebooks{" "}
    <FontAwesomeIcon
      icon={faAngleRight}
      className="right-arrow-icon"
    />
  </h2>
  <div className="similar-container">
    <div className="similar-ebooks">
      {dummySimilarEbooks.map((similarEbook) => (
        <div key={similarEbook.id} className="similar-ebook">
          <div className="similar-left">
            <img
              src={similarEbook.image}
              alt={similarEbook.title}
              className="similar-image"
            />
          </div>
          <div className="similar-right">
            <p className="similar-title">{similarEbook.title}</p>
            <p className="similar-price">Rs. {similarEbook.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          </div>
        </div>

        <div className="about-the-author">
          <h3 className="heading">About the Author</h3>
          <p className="paragraph">{selectedBook.about_the_author}</p>
        </div>
        <div className="rate-the-book">
          <h3 className="heading">Rate this Book</h3>
          <div className="rate-this-book-content">
            <div className="stars">{renderStars()}</div>
            <div>
              {isReviewSubmitted ? (
                <div className="write-review">
                  <p>Your Rating: {rating} stars</p>
                  <form className="review-form">
                    <textarea
                      className="review-input"
                      placeholder="Write your review here..."
                    />
                    <button className="submit-btn" type="submit">
                      Submit Review
                    </button>
                    <p className="review-date">
                      Review submitted on: {new Date().toLocaleDateString()}
                    </p>
                  </form>
                </div>
              ) : (
                <div className="write-review">
                  <button
                    className="btn"
                    onClick={() => setIsReviewSubmitted(true)}
                  >
                    Write Review
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EbookDescription;
