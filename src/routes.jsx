import { createBrowserRouter } from "react-router";

import App from "./App";
import Favorites from "./pages/Favorite";
import About from "./pages/About";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "favorite", element: <Favorites /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
