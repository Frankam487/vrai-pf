import { useState } from "react";
import "./discoverButton.css"; // Assure-toi d'inclure ce fichier CSS dans ton projet

const DiscoverButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="discover-container">
      {/* Bouton qui change de texte et d'animation au clic */}
      <button className={`discover-button ${isOpen ? "open" : ""}`} onClick={toggleSection}>
        <span className="discover-text">{isOpen ? "Fermer" : "Découvrir"}</span>
        <span className={`arrow ${isOpen ? "rotate" : ""}`}>→</span>
      </button>

      {/* Section qui se montre au clic */}
      {isOpen && (
        <div className="discover-content">
          <h2>Bienvenue sur mon portfolio !</h2>
          <p>
            Découvrez mes projets et apprenez-en plus sur mon parcours professionnel.
            J'espère que vous trouverez ce que vous cherchez ici !
          </p>
          <a href="#projet" className="discover-link">
            Voir mes projets
          </a>
        </div>
      )}
    </div>
  );
};

export default DiscoverButton;
