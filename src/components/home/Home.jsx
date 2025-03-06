import "./iconss.css";
import "./home.css";
import DiscoverButton from "../../page/DiscoverButton";
import { useState } from "react";

const Home = () => {
  const [showDiscover, setShowDiscover] = useState(false);

  const toggleDiscover = () => {
    setShowDiscover(!showDiscover);
  };

  return (
    <section className="home">
      <div className="home-hero">
        <div className="text">
          <h1 className="typing-text">Frank Kamgang</h1>
          <div className="designer-title">
            <span className="line"></span>
            <h2>Designer Visuel</h2>
          </div>
          <p>
            Développeur Web passionné, créant des expériences interactives et
            immersives <strong>.</strong>
          </p>
          <button className="toggle-button" onClick={toggleDiscover}>
            {showDiscover ? "Cacher" : "Découvrir 👋"}
            {/* <i className="uil uil-arrow-right"></i> */}
          </button>
        </div>
        <div className="home-img">
          {/* Optionally add an image or animation here */}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="icons">
        <a href="https://www.facebook.com/Frankam.Shopping" aria-label="Facebook">
          <i className="uil uil-facebook"></i>
        </a>
        <a href="#" aria-label="whatsapp">
          <i className="uil uil-whatsapp"></i>
        </a>
        <a href="https://github.com/Frankam487" aria-label="github">
          <i className="uil uil-github"></i>
        </a>
      </div>

      
      {showDiscover && <DiscoverButton />}
    </section>
  );
};

export default Home;
