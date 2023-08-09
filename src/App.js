import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import CourseDetailPage from "./pages/CourseDetail";
import FavouriteCoursesPage from "./pages/FavouriteCourse";
import AppLayout from "./pages/AppLayout";

import { loader as getCourseList } from "./features/course/Courses";
import { action as logoutAction } from "./pages/Logout";
import { loader as favouriteCourseLoader } from "./features/course/components/FavouriteCourses";
import { action as resetEmailAction } from "./features/auth/components/ResetEmail";
import { action as resetPasswordAction } from "./features/auth/components/ResetPassword";

import ResetPasswordPage from "./pages/ResetPasword";
import ResetEmailPage from "./pages/ResetEmail";
import { useEffect } from "react";
import { login } from "./features/auth/auth-slice";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
        loader: getCourseList,
      },
      {
        path: ":courseId",
        element: <CourseDetailPage />,
      },
      {
        path: "wishlist",
        element: <FavouriteCoursesPage />,
        loader: favouriteCourseLoader,
      },
    ],
  },
  {
    path: "/auth/signup",
    element: <SignupPage />,
  },
  {
    path: "/auth/signin",
    element: <SigninPage />,
  },
  {
    path: "/logout",
    action: logoutAction,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
    action: resetPasswordAction,
  },
  {
    path: "/reset-email",
    element: <ResetEmailPage />,
    action: resetEmailAction,
  },
  {
    path: "error",
    element: <ErrorPage />,
  },
]);
const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("user");
  useEffect(() => {
    if (isLoggedIn !== null) {
      dispatch(login({ role: "learner" }));
    }
  }, [isLoggedIn, dispatch]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
