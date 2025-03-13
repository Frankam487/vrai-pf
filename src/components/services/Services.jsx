import { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(null);

  const toggleTab = (index) => {
    setToggleState(toggleState === index ? null : index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Ce que j'offre en développement web</span>

      <div className="services__container container grid">
        {/* Service 1: Développement Front-End */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Développement <br /> Front-End</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(null)}></i>
              <h3 className="services__modal-title">Développement Front-End</h3>
              <p className="services__modal-description">
                J'aide à créer des interfaces utilisateurs modernes et réactives avec les dernières technologies web.
              </p>
              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Création de sites web responsive</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Optimisation des performances des pages web</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Utilisation de frameworks modernes comme React et Next.js</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 2: Développement Back-End */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Développement <br /> Back-End</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(null)}></i>
              <h3 className="services__modal-title">Développement Back-End</h3>
              <p className="services__modal-description">
                Je crée des solutions robustes et sécurisées pour gérer la logique de l’application côté serveur.
              </p>
              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Création d'APIs RESTful avec Node.js et Express</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Gestion de bases de données avec MySQL, PostgreSQL et MongoDB</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Mise en place de l'authentification et de la sécurité des utilisateurs</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 3: Conception UI/UX */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Conception <br /> UI/UX</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(null)}></i>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Je conçois des interfaces élégantes et intuitives en mettant l'accent sur l'expérience utilisateur.
              </p>
              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Création de maquettes et prototypes interactifs</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Optimisation de l'expérience utilisateur pour améliorer la conversion</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Tests utilisateurs et analyse des retours pour ajuster les interfaces</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
