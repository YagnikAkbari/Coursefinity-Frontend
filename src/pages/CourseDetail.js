import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import CourseDetails from "../features/course/components/CourseDetails";

function CourseDetail() {
  const params = useParams();

  return (
    <>
      <Helmet>
        <title>{params.courseId}</title>
        <meta
          name="description"
          content="coursefinity are here to meet indian educators with the student from every corner of india"
        />
      </Helmet>

      <CourseDetails />
    </>
  );
}

export default CourseDetail;
