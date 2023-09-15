import "../../styles/hero.css";

function Hero({ hero_data }) {
  return (
    // Conditionally render either the video hero or the standard hero
    <>
      {hero_data.heroType === "video" ? (
        <div className="hero-container video">
          <div
            className={`${
              hero_data.forceOneLineTitle ? "hero-text one-line" : "hero-text"
            }`}
          >
            <p className="allCaps">{hero_data.subTitle}</p>
            <h1>{hero_data.title}</h1>
            <div className="hero-video">
              <p>handle home hero video</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`hero-container general ${hero_data.height} ${hero_data.backgroundColor}`}
        >
          <div
            className={` ${
              hero_data.forceOneLineTitle ? "hero-text one-line" : "hero-text"
            }`}
          >
            <p className="allCaps">{hero_data.subTitle}</p>
            <h1>{hero_data.title}</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
