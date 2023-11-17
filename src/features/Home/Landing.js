import React from "react";

import Courses from "../course/Courses";
import LearnerHome from "./LearnerHome";
import InstructorHome from "./InstructorHome";
import { useSelector } from "react-redux";

function Landing() {
  // const role = useSelector((state) => state.auth.role);
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (role === "learner" && isAuthenticated) {
    return <LearnerHome />;
  } else if (role === "instructor" && isAuthenticated) {
    return <InstructorHome />;
  }
  return <Courses />;
}

export default Landing;
