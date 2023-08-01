import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import AppLayout from "./pages/AppLayout";

import { action as registerUserAction } from "./features/auth/SignupForm";
import { action as loginUserAction } from "./features/auth/SigninForm";
import { loader as getCourseList } from "./features/course/Courses";
import { action as logoutAction } from "./pages/Logout";

import ResetPasswordPage from "./pages/ResetPaswordPage";

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
        element: <CourseDetail />,
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
    path: "reset-password",
    element: <ResetPasswordPage />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
