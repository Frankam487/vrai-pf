import "./commits.css";

import { useState, useEffect } from "react";


const Commits = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 850) {
      const interval = setInterval(() => {
        setCount((prev) => Math.min(prev + Math.floor(Math.random() * 20 + 1), 850));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div
        className=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="">Nombre de Commits</h1>
        <p
          className=""
          
        >
          {count}
        </p>
      </div>
    </div>
  );
};

export default Commits;
