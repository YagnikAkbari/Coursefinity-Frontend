import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import AppLayout from "./pages/AppLayout";

import { action as registerUserAction } from "./features/auth/SignupForm";
import { action as loginUserAction } from "./features/auth/SigninForm";
import { loader as getCourseDetail } from "./features/course/CourseDetails";
import { action as logoutAction } from "./pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <AppLayout />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":courseId",
        element: <CourseDetail />,
        loader: getCourseDetail,
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
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
