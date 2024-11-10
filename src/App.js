import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./features/ui/styles/image.css";

import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import CourseDetailPage from "./pages/CourseDetail";
import FavouriteCoursesPage from "./pages/FavouriteCourse";
import AppLayout from "./pages/AppLayout";
import ResetPasswordPage from "./pages/ResetPasword";
import ResetEmailPage from "./pages/ResetEmail";
import StripeCheckout from "./pages/StripeCheckout";
import CreateCoursePage from "./pages/CreateCourse";
import CreateCourseModulesPage from "./pages/CreateCourseModules";
import LearningCoursePage from "./pages/LearningCourse";
import MyCoursesPage from "./pages/MyCourses";
import EndCoursePage from "./pages/EndCourse";
import MyCreatedCourse from "./pages/MyCreatedCourses";

import Protected from "./features/auth/components/Protected";
import Logout from "./pages/Logout";

import FinishCourse from "./pages/FinishCourse";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <AppLayout />,

    children: [
      // learner routes
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":courseId",
        element: <CourseDetailPage />,
      },
      {
        path: "profile",
        element: (
          <Protected>
            <ProfilePage />
          </Protected>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Protected>
            <FavouriteCoursesPage />
          </Protected>
        ),
      },
      {
        path: "my-courses",
        element: (
          <Protected>
            <MyCoursesPage />
          </Protected>
        ),
      },
      {
        path: "created-course",
        element: <MyCreatedCourse />,
      },
      {
        path: "learning",
        element: (
          <Protected>
            <LearningCoursePage />
          </Protected>
        ),
      },
      // instrutor routes
      {
        path: "create-course/:step",
        element: (
          <Protected>
            <CreateCoursePage />
          </Protected>
        ),
      },
      {
        path: "create-module",
        element: (
          <Protected>
            <CreateCourseModulesPage />
          </Protected>
        ),
      },
      {
        path: "end-course",
        element: (
          <Protected>
            <EndCoursePage />
          </Protected>
        ),
      },
      {
        path: "finish-course/:courseId",
        element: (
          <Protected>
            <FinishCourse />
          </Protected>
        ),
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
    element: <Logout />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/reset-email",
    element: <ResetEmailPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/course-checkout/:courseId",
    element: (
      <Protected>
        <StripeCheckout />
      </Protected>
    ),
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
