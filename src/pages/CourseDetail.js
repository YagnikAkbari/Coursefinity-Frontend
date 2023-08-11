import { useLoaderData } from "react-router-dom";
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
  if (response.statusCode === 400) {
    console.log("course not possible");
    return null;
  }
  if (response.statusCode === 404) {
    console.log("course not found.");
    return null;
  }
  if (response.statusCode === 500) {
    console.log("server error.");
  }
  console.log(response);
  return response;
}
