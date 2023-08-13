import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourseById } from "../../../services/apiCourse";
import CourseAccordion from "./CourseAccordion";
import Button from "../../ui/Button";

const LearningCoures = ({ courseId, courseModule }) => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({});

  const { courseIntroVideoUrl, courseModules, _id, totalCourseModules } =
    courseData;

  useEffect(() => {
    const fecthCourse = async () => {
      const response = await getCourseById(courseId);
      if (!response.ok) {
        return navigate("/error");
      }

      const data = response.body.message;
      const totalCourseModules = +data.courseModules.length;

      const courseModules = data.courseModules.filter(
        (_, index) => index + 1 <= +courseModule
      );

      setCourseData({ ...data, courseModules, totalCourseModules });
    };
    fecthCourse();
  }, [courseId, navigate, courseModule]);

  return (
    <div>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${courseIntroVideoUrl}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
      {courseModules && <CourseAccordion modules={courseModules} />}
      {courseModule > 1 && (
        <Button
          type="button"
          typeName="secondary"
          onClick={() => {
            navigate(
              `?id=${_id}&module=${
                +courseModule - 1 <= 0 ? +courseModule : +courseModule - 1
              }`
            );
          }}
        >
          Back
        </Button>
      )}
      {totalCourseModules > courseModule && (
        <Button
          type="button"
          onClick={() => {
            navigate(
              `?id=${_id}&module=${
                +courseModule + 1 > totalCourseModules
                  ? totalCourseModules
                  : +courseModule + 1
              }`
            );
          }}
        >
          Next Chapter
        </Button>
      )}
    </div>
  );
};

export default LearningCoures;
