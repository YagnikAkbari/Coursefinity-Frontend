import { redirect, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

import CourseDetails from "../features/course/components/CourseDetails";
import { getCourseById } from "../services/apiCourse";

function CourseDetail() {
  const data = useLoaderData();
  const courseData = data?.body.message;
  return (
    <>
      <Helmet>
        <title>{courseData.courseTitle}</title>
        <meta
          name="description"
          content="coursefinity are here to meet indian educators with the student from every corner of india"
        />
      </Helmet>

      <CourseDetails courseData={courseData} />
    </>
  );
}

export default CourseDetail;

export async function loader({ params }) {
  const courseId = params.courseId;
  const response = await getCourseById(courseId);
  if (!response.ok) {
    return redirect("/error");
  }

  return response;
}
