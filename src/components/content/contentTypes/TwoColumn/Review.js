import React, { useState, useEffect } from "react";

function Review({ review_content, currentIndex }) {
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
  }, [currentIndex, review_content.rotatorType.edges.length]);

  const currentTestimonial =
    review_content.rotatorType.edges[currentTestimonialIndex];
  const formattedDate = formatDate(
    currentTestimonial.node.reviewFields.dateOfReview
  );

  return (
    <div style={{ backgroundColor: "#EFF7FB", height: "100%" }}>
      <div
        className={`testimonial ${isFading ? "fade-out" : "fade-in"}`}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          textAlign: "left",
          gap: "24px",
          padding: "40px",
        }}
      >
        <div
          className="stars"
          style={{ "--stars": currentTestimonial.node.reviewFields.starRating }}
        ></div>
        <p className="body-text">
          {currentTestimonial.node.reviewFields.review}
        </p>
        <div>
          <h5>{currentTestimonial.node.reviewFields.name}</h5>
          <p className="allCaps" style={{ paddingBottom: "40px" }}>
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
