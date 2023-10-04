function Accolades({ accolade_data }) {
  const accoladeBlock = accolade_data.accolade.map((accolade, index) => {
    return (
      <div
        className="accolade"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "40px",
        }}
        key={index}
      >
        <div
          id="accoldate-stars"
          className="stars"
          style={{ "--stars": accolade.starRating }}
        ></div>
        <div className="image-wrapper brand" style={{ height: "51px" }}>
          <img
            src={accolade.brandImage.node.mediaItemUrl}
            alt={accolade.brandImage.node.altText}
          />
        </div>
      </div>
    );
  });

  return (
    <div
      className="accolades-container"
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {accoladeBlock}
    </div>
  );
}

export default Accolades;
