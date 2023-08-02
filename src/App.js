import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import CourseDetailPage from "./pages/CourseDetail";
import FavouriteCoursesPage from "./pages/FavouriteCourse";
import AppLayout from "./pages/AppLayout";

import { action as registerUserAction } from "./features/auth/SignupForm";
import { action as loginUserAction } from "./features/auth/SigninForm";
import { loader as getCourseList } from "./features/course/Courses";
import { action as logoutAction } from "./pages/Logout";
import { loader as favouriteCourseLoader } from "./features/course/FavouriteCourses";

import ResetPasswordPage from "./pages/ResetPaswordPage";
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
    action: registerUserAction,
  },
  {
    path: "/auth/signin",
    element: <SigninPage />,
    action: loginUserAction,
  },
  {
    path: "/logout",
    action: logoutAction,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
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
  return <RouterProvider router={router} />;
};

export default App;
