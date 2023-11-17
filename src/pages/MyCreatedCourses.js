import React from "react";
import { Helmet } from "react-helmet";
import MyCreatedCourse from "../features/course/components/MyCreatedCourse";

const MyCreatedCourses = () => {
  return (
    <>
      <Helmet>
        <title>Created course | coursefinity</title>
        <meta
          name="description"
          content="coursefinity are here to meet indian educators with the student from every corner of india"
        />
      </Helmet>
      <MyCreatedCourse />
    </>
  );
};

export default MyCreatedCourses;
