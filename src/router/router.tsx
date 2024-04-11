import { createBrowserRouter } from "react-router-dom";
import { HomeMainPage } from "../pages/pages";

const base = import.meta.env.VITE_BASE;

export const router = createBrowserRouter([
  {
    path: `${base}/`,
    element: <HomeMainPage />,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: `${base}/categories`,
    element: <h2>Categories..</h2>,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
]);