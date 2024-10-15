import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Layout from "./layout";
import Home from "./pages/Home";
import Glossary from "./pages/Glossary";
import Learning from "./pages/Learning";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    index: true,
    element: <Home />,
  },
  {
    path: "/glossary",
    element: <Glossary />,
  },
  {
    path: "/learning",
    element: <Learning />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </StrictMode>
);
