import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./commits.css";

const Commits = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 837) {
      const interval = setInterval(() => {
        setCount((prev) => Math.min(prev + Math.floor(Math.random() * 20 + 1), 850));
      }, 30);
      return () => clearInterval(interval);
    }
  }, [count]);

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="commits-container">
      <h1 className="commits-title">Nombre de Commits</h1>
      <p className="commits-count">
        <a href="https://github.com/Frankam487">
        {count} -> <FaGithub className="github-icon" />
        </a>
      </p>
      <button className="reset-button" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
};

export default Commits;
