function Accolades({ accolade_data }) {
  const accoladeBlock = accolade_data.accolades.map((accolade, index) => {
    console.log(accolade);
    return (
      <div className="accolade" key={index}>
        <div
          id="accoldate-stars"
          className="stars"
          style={{ "--stars": accolade.starRating }}
        ></div>
        <div className="image-wrapper brand">
          <img
            src={accolade.brandLogo.node.mediaItemUrl}
            alt={accolade.brandLogo.node.altText}
          />
        </div>
      </div>
    );
  });

  return <div className="accolades-container">{accoladeBlock}</div>;
}

export default Accolades;
