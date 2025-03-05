import { useState, useEffect } from "react";
import "./scroll.css";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#" className={`scroll ${isVisible ? "show-scroll" : ""}`}>
      <i className="uil uil-arrow-up scroll__icon"></i>
    </a>
  );
};

export default Scroll;
