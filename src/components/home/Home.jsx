import "./iconss.css";
import "./home.css";
import DiscoverButton from "../../page/DiscoverButton";
import { useState } from "react";
import { FaFacebook, FaWhatsapp, FaGithub } from 'react-icons/fa'; // Import des icônes

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
        {/* Facebook */}
        <a href="https://www.facebook.com/Frankam.Shopping" aria-label="Facebook">
          <FaFacebook size={30} color="#1877F2" /> {/* Icône Facebook */}
        </a>

        {/* WhatsApp */}
        <a href="#" aria-label="whatsapp">
          <FaWhatsapp size={30} color="#25D366" /> {/* Icône WhatsApp */}
        </a>

        {/* GitHub */}
        <a href="https://github.com/Frankam487" aria-label="github">
          <FaGithub size={30} color="#000000" /> {/* Icône GitHub */}
        </a>
      </div>

      
      {showDiscover && <DiscoverButton />}
    </section>
  );
};

export default Home;
