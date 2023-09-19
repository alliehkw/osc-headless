import React, { useState, useEffect } from "react";

function Review({ reviews, currentIndex }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // new state for fading

  function formatDate(inputDate) {
    // Split the input date string into day, month, and year parts
    const [day, month, year] = inputDate.split("/");

    // Create a JavaScript Date object
    const date = new Date(`${year}-${month}-${day}`);

    // Format the date as "Month day, year"
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  useEffect(() => {
    setIsFading(true); // start fading out
    const fadeOutTimeout = setTimeout(() => {
      setCurrentTestimonialIndex(currentIndex);
      setIsFading(false); // done fading out, start fading in
    }, 500); // adjust the timeout duration as needed

    return () => {
      clearTimeout(fadeOutTimeout);
    };
  }, [currentIndex, reviews.length]);

  const currentTestimonial = reviews[currentTestimonialIndex];
  const formattedDate = formatDate(
    currentTestimonial.reviewFields.dateOfReview
  );

  return (
    <div
      id="testimonial"
      className={`testimonial ${isFading ? "fade-out" : "fade-in"}`}
    >
      <div
        className="stars"
        style={{ "--stars": currentTestimonial.reviewFields.starRating }}
      ></div>
      <p className="review body-text">
        {currentTestimonial.reviewFields.review}
      </p>
      <p className="reviewName">{currentTestimonial.reviewFields.name}</p>
      <p className="allCaps">{formattedDate}</p>
    </div>
  );
}

export default Review;
