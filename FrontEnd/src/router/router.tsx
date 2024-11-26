import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import MenSneakers from "../pages/MenSneakers";
import WomenSneakers from "../pages/WomenSneakers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/men-sneaker", element: <MenSneakers /> },
      { path: "/women-sneaker", element: <WomenSneakers /> },
    ],
  },
]);
