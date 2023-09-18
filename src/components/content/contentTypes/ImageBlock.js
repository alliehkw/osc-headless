function ImageBlock({
  image_data,
  numberOfColumns,
  imageAlignment,
  gapBetweenImages,
}) {
  const imageBlock = image_data.images.map((image, index) => {
    // TO DO: dynamically render the shadow based on the position of the overlay
    let height = image.imageHeight;
    let width = image.imageWidth;
    let borderRadius = image.imageBorder;
    return (
      <div
        className={
          image.imageOverlay[0].shadowUnderOverlay
            ? "image-wrapper with-overlay"
            : "image-wrapper"
        }
        key={index}
        style={{
          height: height,
          width: width,
          borderRadius: borderRadius,
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        }}
      >
        <img
          src={image.image.node.mediaItemUrl}
          alt={image.image.node.altText}
        />
      </div>
    );
  });
  return (
    // TO DO: mimic class naming structure of TextBlock
    <div
      className={
        // Override width if marked as full width
        image_data.fullWidth
          ? `image-block row full-width _${numberOfColumns}`
          : `image-block row _${numberOfColumns}`
      }
      style={{ gap: gapBetweenImages }}
    >
      {imageBlock}
    </div>
  );
}

export default ImageBlock;
