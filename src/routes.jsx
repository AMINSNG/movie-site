import { createBrowserRouter } from "react-router";

import App from "./App";
import Favorites from "./pages/Favorite";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "favorite", element: <Favorites /> },
    ],
  },
]);

export default router;
