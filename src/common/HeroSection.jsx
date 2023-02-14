import "./HeroSection.css";

function Hero({ image, handleScroll }) {
  return (
    <div className="container-fluid hero-section">
      <div className="container hero-container">
        <div className="heroContent">
          <h1 className="mb-4">
            <span style={{ fontSize: "4rem" }}>Are you Looking</span> <br /> for
            a great taste
          </h1>
          <a href="#" onClick={handleScroll} className="btn btnExplore">
            Explore Listing
          </a>
        </div>
        <div className="hero-image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
