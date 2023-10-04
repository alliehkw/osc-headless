function Image(image_data) {
  console.log("image_data", image_data);
  let imageAlignment = "center";
  let imageHeight = "auto";
  let imageWidth = "100%";
  if (image_data.image_data.customImageHeight) {
    imageAlignment = image_data.image_data.imageAlignment[0];
    imageHeight = image_data.image_data.imageHeight;
    imageWidth = "auto";
  }
  return (
    <div
      className="image-wrapper"
      style={{
        justifyContent: imageAlignment,
        height: imageHeight,
      }}
    >
      <img
        src={image_data.image_data.image.node.mediaItemUrl}
        alt={image_data.image_data.image.node.altText}
        style={{ width: imageWidth }}
      />
    </div>
  );
}

export default Image;
