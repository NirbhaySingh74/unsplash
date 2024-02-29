import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PhotoGallery from "../components/PhotoGallery";
import AboutPhoto from "../components/AboutPhoto";
import AboutUnsplash from "../components/AboutUnsplash";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PhotoGallery />,
      },
      {
        path: "/about",
        element: <AboutUnsplash />,
      },
      {
        path: "/photos/:photoId",
        element: <AboutPhoto />,
      },
    ],
  },
]);

export default router;
