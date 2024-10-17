import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Layout from "./App";
import Home from "./pages/Home";
import Glossary from "./pages/Glossary";
import Learning from "./pages/Learning";

import { createHashRouter, RouterProvider } from "react-router-dom";
import Shooter from "./games/Shooter";
import Forum from "./pages/Forum";
import CreatePost from "./pages/CreatePost";
import Introduction from "./pages/Introduction";
import NashEquality from "./games/NashEquality";
import TwoButtonsGame from "./games/TwoButtons";
import ForumPage from "./pages/ForumPage";
import Impressum from "./pages/Impressum";

const router = createHashRouter([
  {
    path: "/",
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
  {
    path: "/game1",
    element: <Shooter />,
  },
  {
    path: "/game2",
    element: <TwoButtonsGame />,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
  {
    path: "/forum/:postId",
    element: <ForumPage />,
  },
  {
    path: "/createpost",
    element: <CreatePost />,
  },
  {
    path: "/introduction",
    element: <Introduction />,
  },
  {
    path: "/nashequality",
    element: <NashEquality />,
  },
  {
    path: "/impressum",
    element: <Impressum />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </StrictMode>
);
