import "../../styles/hero.css";

function Hero({ hero_data }) {
  console.log(hero_data);
  return (
    <>
      {hero_data.heroType === "video" ? (
        <div className="hero-container video">
          <p className="allCaps">{hero_data.subTitle}</p>
          <h1>{hero_data.title}</h1>
          <div className="hero-video">
            <p>handle home hero video</p>
          </div>
        </div>
      ) : (
        <div
          className={`hero-container general${hero_data.backgroundColor} ${hero_data.height}`}
        >
          <p className="allCaps">{hero_data.subTitle}</p>
          <h1>{hero_data.title}</h1>
        </div>
      )}
    </>
  );
}

export default Hero;
