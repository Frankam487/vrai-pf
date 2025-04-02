import Backendend from "./Backendend";
import Frontend from "./Frontend";
import "./skills.css";
import React from 'react';
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Competences</h2>
      <span className="section__subtitle"> Mon niveau Technique </span>

      <div className="skills__container container grid">
        <Frontend />
        <Backendend/>
      </div>
   </section>
  );
};

export default Skills;