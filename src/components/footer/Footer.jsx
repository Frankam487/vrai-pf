import { FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa"; 
import React from 'react';
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
          <a target="_blank" href="https://www.facebook.com/Frankam.Shopping" aria-label="Facebook">
            <FaFacebook size={30} className="social-icon facebook" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=+237690461830&text=Salut, comment ça va ?" target="_blank" aria-label="whatsapp">
            <FaWhatsapp size={30} className="social-icon whatsapp" />
          </a>
          <a target="_blank" href="https://github.com/Frankam487" aria-label="github">
            <FaGithub size={30} className="social-icon github" />
          </a>
        </div>

        <span className="footer__copy">
          &#169; 2025 Frankam. Tous droits réservés
        </span>

      </div>
    </footer>
  );
};

export default Footer;
