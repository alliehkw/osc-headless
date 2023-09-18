function MediaCard({ card_data }) {
  console.log(card_data);
  return (
    <div className="media-card-container">
      <div
        className="image-wrapper"
        style={{ height: card_data.imageHeight, width: card_data.imageWidth }}
      >
        <img
          src={card_data.image.node.mediaItemUrl}
          alt={card_data.image.node.altText}
        />
      </div>
      <div className="media-card-text">
        <h5>{card_data.title}</h5>
        <p>{card_data.content}</p>
        <button className="transparent">{`Read More >>`}</button>
      </div>
    </div>
  );
}

export default MediaCard;
