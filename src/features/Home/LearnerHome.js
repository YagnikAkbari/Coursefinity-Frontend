import { useState } from "react";
import CourseItem from "../course/components/CourseItem";
import { useLoaderData } from "react-router-dom";

function LearnerHome() {
  const [viewAllCourse, setViewAllCourse] = useState(false);
  const data = useLoaderData();
  const courseList = data.body.message;
  const displayAllCourseHandler = () => {
    setViewAllCourse((prevState) => !prevState);
  };

  return (
    <>
      <h1 className="space-x-3 text-xl font-semibold mx-24 mt-10">
        <span>Continue your learning Courses</span>
        <button className="text-primary-700" onClick={displayAllCourseHandler}>
          {!viewAllCourse ? "View all" : "hide"}
        </button>
      </h1>
      <div
        className={`text-center grid w-full pt-5 pb-8 px-[6rem] gap-y-5 ${
          viewAllCourse ? "grid-cols-2 gap-y-10" : "grid-cols-4"
        }`}
      >
        {!viewAllCourse &&
          courseList.map((course) => {
            return <CourseItem course={course} key={course._id} />;
          })}
        {viewAllCourse &&
          courseList.map((course) => {
            return <CourseItem course={course} key={course.id} view="all" />;
          })}
      </div>
    </>
  );
}

export default LearnerHome;
