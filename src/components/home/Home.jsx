
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
            immersives.
          </p>
          <button>
            Découvrir 👋
            <i className="uil uil-arrow-right"></i>
          </button>
        </div>
        <div className="home-img"></div>
      </div>
      <div className="icons">
        <a href="#" aria-label="Facebook">
          <i className="uil uil-facebook"></i>
        </a>
        <a href="#" aria-label="Twitter">
          <i className="uil uil-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="uil uil-github"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
