import React, { useState, useEffect } from "react";
import BackArrow from "../../../../icons/BackArrow";
import FrontArrow from "../../../../icons/FrontArrow.js";
import Review from "./Review.js";

function ReviewBlockRotator({ review_content }) {
  // Get the screen size
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  let imageHeight;
  if (screenSize.width < 600 && screenSize.width > 0) {
    imageHeight = 414;
  } else if (screenSize.width >= 600) {
    imageHeight = 496;
  }

  function handleForwardClick(currentIndex, setCurrentIndex) {
    const nextIndex =
      (currentIndex + 1) % review_content.rotatorType.edges.length;
    setCurrentIndex(nextIndex);
    clearInterval(intervalRef.current);
    startInterval(nextIndex);
  }

  function handleBackwardClick(currentIndex, setCurrentIndex) {
    const prevIndex =
      (currentIndex - 1 + review_content.rotatorType.edges.length) %
      review_content.rotatorType.edges.length;
    setCurrentIndex(prevIndex);
    clearInterval(intervalRef.current);
    startInterval(prevIndex);
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = React.useRef(null);

  const startInterval = (index) => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % review_content.rotatorType.edges.length
      );
    }, 15000);
  };

  useEffect(() => {
    startInterval(currentIndex);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="review-block-container" style={{ position: "relative" }}>
      <div
        className="testimonial-block"
        style={{
          height: imageHeight,
          overflow: "auto",
          backgroundColor: "#EFF7FB",
        }}
      >
        <Review review_content={review_content} currentIndex={currentIndex} />
      </div>
      <div
        className="arrows"
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          bottom: "0", // Position the arrows div at the bottom
          right: "24px", // Position the arrows div horizontally in the middle
          marginBottom: "-28px", // Adjust this value to control how much of the arrows div hangs off
          gap: "16px",
        }}
      >
        <button
          className="whitebtn"
          onClick={() => handleBackwardClick(currentIndex, setCurrentIndex)}
        >
          <BackArrow />
        </button>
        <button
          className="greenbtn"
          onClick={() => handleForwardClick(currentIndex, setCurrentIndex)}
        >
          <FrontArrow />
        </button>
      </div>
    </div>
  );
}

export default ReviewBlockRotator;
