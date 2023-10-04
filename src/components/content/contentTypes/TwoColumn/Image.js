function Image(image_data) {
  let imageAlignment = "center";
  if (image_data.image_data.customImageHeight) {
    imageAlignment = image_data.image_data.imageAlignment[0];
  }
  return (
    <div className="image-wrapper" style={{ justifyContent: imageAlignment }}>
      <img
        src={image_data.image_data.image.node.mediaItemUrl}
        alt={image_data.image_data.image.node.altText}
        style={{ height: image_data.image_data.imageHeight, width: "auto" }}
      />
    </div>
  );
}

export default Image;
