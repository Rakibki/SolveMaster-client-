import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Blog from "../pages/blogs/Blogs";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Profile from "../pages/profile/Profile";
import Problems from "../pages/problems/Problems"
import ProblemsDetails from "../pages/problemsDetails/ProblemsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
    path: "/dashboard/profile",
    element: <Profile />,
  },
]);

export default router;
