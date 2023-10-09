import RightArrow from "../../../../icons/RightArrow.js";
import LeftArrow from "../../../../icons/LeftArrow.js";
import React, { useRef } from "react";

function ImageCarousel({ carousel_data, screenSize }) {
  let imageHeight;
  let imageGap = "24px";
  let scrollSpace = "32px";
  let arrowSize = 67;
  if (screenSize.width < 600 && screenSize.width > 0) {
    imageHeight = carousel_data.imageHeightMobile;
    imageGap = "16px";
    scrollSpace = "24px";
    arrowSize = 33;
  } else if (screenSize.width >= 600 && screenSize.width < 1023) {
    imageHeight = carousel_data.imageHeightTablet;
  } else if (screenSize.width >= 1024) {
    imageHeight = carousel_data.imageHeightDesktop;
  }

  const containerRef = useRef(null);

  // Function to animate the scroll
  function smoothScrollTo(targetScroll) {
    const duration = 500; // Adjust the duration as needed
    const start = containerRef.current.scrollLeft;
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const progress = (timestamp - startTime) / duration;
      if (progress < 1) {
        containerRef.current.scrollLeft =
          start + (targetScroll - start) * progress;
        requestAnimationFrame(scrollStep);
      } else {
        containerRef.current.scrollLeft = targetScroll;
      }
    }

    requestAnimationFrame(scrollStep);
  }

  function onLeftClick() {
    // Get the current scroll position of the container
    const currentScroll = containerRef.current.scrollLeft;

    // Calculate the width of the container
    const containerWidth = containerRef.current.clientWidth;

    // Calculate the target scroll position to center the previous image
    const targetScroll = currentScroll - containerWidth / 2;

    // Animate the scroll to the target position
    smoothScrollTo(targetScroll);
  }

  function onRightClick() {
    // Get the current scroll position of the container
    const currentScroll = containerRef.current.scrollLeft;

    // Calculate the width of the container
    const containerWidth = containerRef.current.clientWidth;

    // Calculate the target scroll position to center the next image
    const targetScroll = currentScroll + containerWidth / 2;

    // Animate the scroll to the target position
    smoothScrollTo(targetScroll);
  }

  const imageBlock = carousel_data.images.map((image, index) => {
    return (
      <div
        className="image-wrapper"
        style={{
          display: "inline-block",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          height: imageHeight,
          marginRight: imageGap,
          borderRadius: "4px",
        }}
        key={index}
      >
        <img
          src={image.image.node.mediaItemUrl}
          alt={image.image.node.altText}
        />
      </div>
    );
  });

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: imageHeight / 2 - arrowSize / 2,
          left: 0,
          zIndex: 2,
        }}
        onClick={onLeftClick}
      >
        <RightArrow arrowSize={arrowSize} />
      </div>
      <div
        style={{
          position: "absolute",
          top: imageHeight / 2 - arrowSize / 2,
          right: 0,
          zIndex: 2,
        }}
        onClick={onRightClick}
      >
        <LeftArrow arrowSize={arrowSize} />
      </div>
      <div
        ref={containerRef} // Reference to the container
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          maxWidth: "100%",
          paddingBottom: scrollSpace,
        }}
      >
        {imageBlock}
      </div>
    </div>
  );
}

export default ImageCarousel;
