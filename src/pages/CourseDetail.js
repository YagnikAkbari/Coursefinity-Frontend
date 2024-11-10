import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import CourseDetails from "../features/course/components/CourseDetails";
import { getCourseById } from "../services/apiCourse";
import { useEffect, useState } from "react";

function CourseDetail() {
  const [courseDetail, setCourseDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const response = await getCourseById(courseId);

        setCourseDetail(response?.data);
      } catch (err) {
        console.error("ERROR FETCHING COURSE DETAILS:-", err);
        if (err?.response?.status === 404) {
          // TODO: Create 404 page to redirect
          navigate("/error");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourseDetail();
  }, [courseId]);
  return (
    <>
      <Helmet>
        <title>{courseDetail.courseTitle}</title>
        <meta
          name="description"
          content="coursefinity are here to meet indian educators with the student from every corner of india"
        />
      </Helmet>

      <CourseDetails courseData={courseDetail} isLoading={isLoading} />
    </>
  );
}

export default CourseDetail;
