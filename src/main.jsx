import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./components/header/Header.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-red-400">

    <App />
    </div>
  </StrictMode>
);
