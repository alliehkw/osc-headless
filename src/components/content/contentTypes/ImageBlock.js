function ImageBlock({
  image_data,
  numberOfColumns,
  imageAlignment,
  gapBetweenImages,
}) {
  const imageBlock = image_data.images.map((image, index) => {
    let height = image.imageHeight;
    let width = image.imageWidth;
    let borderRadius = image.imageBorder;
    console.log("gapBetweenImages", gapBetweenImages);
    return (
      <div
        className="image-wrapper"
        key={index}
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
