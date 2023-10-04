function Image(image_data) {
  return (
    <div className="image-wrapper">
      <img
        src={image_data.image_data.image.node.mediaItemUrl}
        alt={image_data.image_data.image.node.altText}
      />
    </div>
  );
}

export default Image;
