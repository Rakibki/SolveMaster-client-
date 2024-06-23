import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Blog from "../pages/blogs/Blogs";
import Problems from "../pages/problems/Problems";
import ProblemsDetails from "../pages/problemsDetails/ProblemsDetails";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import MainLayout from "../layout/mainLayout/MainLayout";
import Authentication from "../pages/authentication/Authentication";
import Course from "../pages/course/Course";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Profile from "../pages/dashboard/commom dashboard/profile/Profile";
import MainDashboard from "../pages/dashboard/commom dashboard/main dashboard/MainDashboard";
import Message from "../pages/dashboard/commom dashboard/Message/Message";
import EnrolledCourses from "../pages/dashboard/student dashboard/Enrolled Courses/EnrolledCourses";
import Wishlist from "../pages/dashboard/student dashboard/Wishlist/Wishlist";
import Reviews from "../pages/dashboard/student dashboard/Reviews/Reviews";
import MyQuiz from "../pages/dashboard/student dashboard/My Quiz/MyQuiz";
import Assignments from "../pages/dashboard/student dashboard/Assignments/Assignments";
import Settings from "../pages/dashboard/commom dashboard/Settings/Settings";
import QuizAttempt from "../pages/dashboard/teacher dashboard/Quiz Attempt/QuizAttempt";
import Announcments from "../pages/dashboard/teacher dashboard/Announcments/Announcments";
import MyCourse from "../pages/dashboard/teacher dashboard/MyCourse/MyCourse";
import OrderHistory from "../pages/dashboard/admin dashboard/Order History/OrderHistory";
import AllCourse from "../pages/dashboard/admin dashboard/All Course/AllCourse";
import CreateCourse from "../pages/dashboard/teacher dashboard/Create Course/CreateCourse";

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
        path: "/courses",
        element: <Course />,
      },
      {
        path: "/authentication",
        element: <Authentication />,
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
        path: "/course/:courseId",
        element: <CourseDetails />,
      },
      {
        path: "/problem/:id",
        element: <ProblemsDetails />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "dashboardMain",
        element: <MainDashboard />,
      },
      {
        path: "Message",
        element: <Message />,
      },
      {
        path: "Enrolled-Courses",
        element: <EnrolledCourses />,
      },
      {
        path: "Wishlist",
        element: <Wishlist />,
      },
      {
        path: "Reviews",
        element: <Reviews />,
      },
      {
        path: "MyQuiz",
        element: <MyQuiz />,
      },
      {
        path: "Assignments",
        element: <Assignments />,
      },
      {
        path: "Settings",
        element: <Settings />,
      },
      {
        path: "QuizAttempt",
        element: <QuizAttempt />,
      },
      {
        path: "Announcments",
        element: <Announcments />,
      },
      {
        path: "MyCourse",
        element: <MyCourse />,
      },
      {
        path: "OrderHistory",
        element: <OrderHistory />,
      },
      {
        path: "AllCourse",
        element: <AllCourse />,
      },
      {
        path: "CreateCourse",
        element: <CreateCourse />,
      },
    ],
  },
]);

export default router;
