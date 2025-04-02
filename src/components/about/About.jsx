import Intro from "./Intro";
import "./about.css";
import React from 'react';
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">A propos de moi</h2>
      <span className="section__subtitle">Mon Intro</span>
      <div className="about__container container grid">
        <img src="./ok.jpg" className="about__img" alt="" />

        <div className="about__data">
          <Intro />
          
          <p className="about__description">
            Developpeur Front-End, J'Cree des pages Web avec UI / UX user interface, j'ai plusieurs annees d'experience et plusieurs client(e)s satisfait de mes differnetes taches effectuees 👌.
          </p>

          <a href="" download="" className="button button--flex">
            Telecharger CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;