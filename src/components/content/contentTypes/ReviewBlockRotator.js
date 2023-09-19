import React, { useState, useEffect } from "react";
import BackArrow from "../../../icons/BackArrow";
import FrontArrow from "../../../icons/FrontArrow.js";
import Review from "./Review.js";

function ReviewBlockRotator({ review_block_data, review_content }) {
  function handleForwardClick(currentIndex, setCurrentIndex) {
    const nextIndex = (currentIndex + 1) % review_content.length;
    setCurrentIndex(nextIndex);
    clearInterval(intervalRef.current);
    startInterval(nextIndex);
  }

  function handleBackwardClick(currentIndex, setCurrentIndex) {
    const prevIndex =
      (currentIndex - 1 + review_content.length) % review_content.length;
    setCurrentIndex(prevIndex);
    clearInterval(intervalRef.current);
    startInterval(prevIndex);
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = React.useRef(null);

  const startInterval = (index) => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % review_content.length);
    }, 15000);
  };

  useEffect(() => {
    startInterval(currentIndex);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="review-block-container">
      <div className="left-block">
        <h2>{review_block_data.title}</h2>
        <div className="review-block-text-content">
          <h4>{review_block_data.subtitle}</h4>
          <p className="lightGray">{review_block_data.reviewRequest}</p>
          <button className="green">{review_block_data.buttonText}</button>
        </div>
      </div>
      <div className="right-block">
        <div className="testimonial-block">
          <Review reviews={review_content} currentIndex={currentIndex} />
        </div>
        <div className="arrows">
          <button
            className="back-arrow"
            onClick={() => handleBackwardClick(currentIndex, setCurrentIndex)}
          >
            <BackArrow />
          </button>
          <button
            className="front-arrow"
            onClick={() => handleForwardClick(currentIndex, setCurrentIndex)}
          >
            <FrontArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewBlockRotator;
