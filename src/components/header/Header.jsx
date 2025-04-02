import { useState } from "react";
import "./Header.css";
const Header = () => {
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else {
      header.classList.remove("scroll-header");
    }
  });
  const [toggle, seToggle] = useState(false)
const [active, setActive] = useState("#home")
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Frankam.
          <span>.</span>

        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home"  onClick={() => setActive('#home')} className={active === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"> </i>Acceuil
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={() => setActive('#about')} className={active === "#about" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"> </i>A Propos
              </a>
            </li>

            <li className="nav__item">
              <a href="#skill" onClick={() => setActive('#skill')} className={active === "#skill" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services"  onClick={() => setActive('#services')} className={active === "#services" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"> </i> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio"  onClick={() => setActive('#portfolio')} className={active === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery  nav__icon"> </i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact"  onClick={() => setActive('#contact')} className={active === "#contact" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"> </i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => seToggle(!toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => seToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;