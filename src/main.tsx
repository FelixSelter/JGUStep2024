import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Layout from "./App";
import Home from "./pages/Home";
import Glossary from "./pages/Glossary";
import Learning from "./pages/Learning";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shooter from "./games/Shooter";
import Forum from "./pages/Forum";
import CreatePost from "./pages/CreatePost";
import Introduction from "./pages/Introduction";
import NashEquality from "./games/NashEquality";
import TwoButtonsGame from "./games/TwoButtons";
import ForumPage from "./pages/ForumPage";

const router = createBrowserRouter([
  {
    path: "/JGUStep2024/",
    element: <Home />,
  },
  {
    path: "/JGUStep2024/glossary",
    element: <Glossary />,
  },
  {
    path: "/JGUStep2024/learning",
    element: <Learning />,
  },
  {
    path: "/JGUStep2024/game1",
    element: <Shooter />,
  },
  {
    path: "/JGUStep2024/game2",
    element: <TwoButtonsGame />,
  },
  {
    path: "/JGUStep2024/forum",
    element: <Forum />,
  },
  {
    path: "/JGUStep2024/forum/:postId",
    element: <ForumPage />,
  },
  {
    path: "/JGUStep2024/createpost",
    element: <CreatePost />,
  },
  {
    path: "/JGUStep2024/introduction",
    element: <Introduction />,
  },
  {
    path: "/JGUStep2024/nashequality",
    element: <NashEquality />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </StrictMode>
);
