import { createBrowserRouter } from "react-router-dom";
import { HomeMainPage, SearchMainPage } from "../pages/pages";

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
    path: `${base}/search/:pattern`,
    element: <SearchMainPage />,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
]);