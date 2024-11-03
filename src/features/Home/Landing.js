import React, { useEffect, useState } from "react";

import Courses from "../course/Courses";
import LearnerHome from "./LearnerHome";
import InstructorHome from "./InstructorHome";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../auth/auth-slice";

function Landing() {
  const { isCheckAuth, role } = useSelector((state) => state.auth);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const [render, setRender] = useState("");
  const [isRendering, setIsRendering] = useState(true);
  useEffect(() => {
    if (role && isAuthenticated) {
      setRender(role);
      setIsRendering(false);
    }
    if (!role && !isAuthenticated) {
      setIsRendering(false);
    }
  }, [isAuthenticated, isCheckAuth, role]);

  if (isRendering) {
    return <h1>Loading Dashboard</h1>;
  }

  if (render === "learner") {
    return <LearnerHome />;
  } else if (render === "instructor") {
    return <InstructorHome />;
  } else {
    return <Courses />;
  }
}

export default Landing;
