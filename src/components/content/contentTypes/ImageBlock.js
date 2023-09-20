function ImageBlock({
  image_data,
  numberOfColumns,
  imageAlignment,
  gapBetweenImages,
}) {
  const imageBlock = image_data.images.map((image, index) => {
    console.log("image.overlay", image.imageOverlay);
    // TO DO: dynamically render the shadow based on the position of the overlay
    let height = image.imageHeight;
    let width = image.imageWidth;
    let borderRadius = image.imageBorder;
    return (
      <div key={index}>
        {!image.imageOverlay ? (
          <div
            className="image-wrapper"
            style={{
              height: height,
              width: width,
              borderRadius: borderRadius,
            }}
          >
            <img
              src={image.image.node.mediaItemUrl}
              alt={image.image.node.altText}
            />
          </div>
        ) : (
          <div
            className="image-wrapper with-overlay"
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
        )}
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
