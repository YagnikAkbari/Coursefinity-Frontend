import React from "react";

import Courses from "../features/course/Courses";
import LearnerHome from "./Home/LearnerHome";
import InstructorHome from "./Home/InstructorHome";
import { useSelector } from "react-redux";

function Landing() {
  const role = useSelector((state) => state.auth.role);

  if (role === "learner") {
    return <LearnerHome />;
  } else if (role === "instructor") {
    return <InstructorHome />;
  }
  return <Courses />;
}

export default Landing;
