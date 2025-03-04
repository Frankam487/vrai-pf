import "./iconss.css";
import "./home.css";
const Home = () => {
  
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
          <button>
            Découvrir 👋
            <i className="uil uil-arrow-right"></i>
          </button>
        </div>
        <div className="home-img"></div>
      </div>
      <div className="icons">
        <a
          href="https://www.facebook.com/Frankam.Shopping"
          aria-label="Facebook"
        >
          <i className="uil uil-facebook"></i>
        </a>
        <a href="#" aria-label="whatsapp">
          <i className="uil uil-whatsapp"></i>
        </a>
        <a href="https://github.com/Frankam487" aria-label="github">
          <i className="uil uil-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
