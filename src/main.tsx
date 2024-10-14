import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./pages";
import "./style.css";
import Learning from "./pages/learning";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Learning />
  </StrictMode>
);
