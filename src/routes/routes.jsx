import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Blog from "../pages/blogs/Blogs";
import Profile from "../pages/profile/Profile";
import Problems from "../pages/problems/Problems";
import ProblemsDetails from "../pages/problemsDetails/ProblemsDetails";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import MainLayout from "../layout/mainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/problems",
        element: <Problems />,
      },
      {
        path: "/problem/:id",
        element: <ProblemsDetails />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;