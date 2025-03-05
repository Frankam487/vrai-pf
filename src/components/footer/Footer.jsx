import "./footer.css";
const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Frankam</h1>

        <ul className="footer__list">
          <li className="footer__item">
            <a href="#about" className="footer__link">About</a>
          </li>
          <li className="footer__item">
            <a href="#project" className="footer__link">Projets</a>
          </li>
          <li className="footer__item">
            <a href="#testimonials" className="footer__link">Testimonial</a>
          </li>
        </ul>
        <div className="footer__social"> 

            <a target="_blank"
          href="https://www.facebook.com/Frankam.Shopping"
          aria-label="Facebook"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#" target="_blank" aria-label="whatsapp">
          <i className="bx bxl-whatsapp"></i>
        </a>
          <a target="_blank"
            href="https://github.com/Frankam487" aria-label="github">
          <i className="bx bxl-twitter"></i>
        </a>
        </div>
        <span className="footer__copy">
          &#189 copy; Frankam. Tous droits réservés
        </span>
        
      </div>
    </footer>
  );
}
export default Footer;