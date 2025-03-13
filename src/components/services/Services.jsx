import { useState } from "react";
import "./services.css";
const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Ce que j'offre</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div className="">
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                facilis vero non.
              </p>
              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je developpe des interfaces utilisateur
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Page web de developpement
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je cree des inter-actions UX 🤞
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je developpe des interfaces utilisateur
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div className="">
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            Voir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Product <br /> Designer
              </h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                facilis vero non.
              </p>

              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je developpe des interfaces utilisateur
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Page web de developpement
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je cree des inter-actions UX 🤞
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je developpe des interfaces utilisateur
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div className="">
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>
          <span onClick={() => toggleTab(1)} className="services__button">
            Voir plus{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Designer Visuel</h3>
              <p className="services__modal-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                facilis vero non.
              </p>

              <ul className="services__modal-services">
                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je developpe des interfaces utilisateur
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Page web de developpement
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je cree des inter-actions UX 🤞
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="iol uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Je developpe des interfaces utilisateur
                  </p>
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