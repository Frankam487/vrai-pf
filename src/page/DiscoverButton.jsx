import { useState } from "react";
import "./discoverButton.css"; // Assure-toi d'inclure ce fichier CSS dans ton projet

const DiscoverButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="discover-container">
      <button className="discover-button" onClick={toggleSection}>
        Découvrir
      </button>
      {isOpen && (
        <div className="discover-content">
          <h2>Bienvenue sur mon portfolio !</h2>
          <p>
            Ici vous trouverez une sélection de mes projets, ainsi que des informations
            sur mes compétences et mon parcours. J'espère que vous apprécierez mon travail.
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
