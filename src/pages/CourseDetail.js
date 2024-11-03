import { redirect, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import CourseDetails from "../features/course/components/CourseDetails";
import { getCourseById } from "../services/apiCourse";
import { useEffect, useState } from "react";

function CourseDetail() {
  const [courseDetail, setCourseDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { courseId } = useParams();

  useEffect(() => {
    const fetchCourseDetail = async () => {
      const response = await getCourseById(courseId);
      
      if (!response.ok) {
        return redirect("/error");
      }
      
      

      setCourseDetail(response.body.message);
    };
    try {
      fetchCourseDetail();
    } catch (err) {
      console.log("responseresponse");
      console.error("ERROR FETCHING COURSE DETAILS:-", err);
    } finally {
      setIsLoading(false);
    }
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
