import React, { useEffect, useState } from "react";

import CourseItem from "./components/CourseItem";

import { getCourseList } from "../../services/apiCourse";
import Spinner from "../ui/Spinner";
import Showcase from "../Home/Showcase";

const CourseShowCase = ({ courseList }) => {
  return (
    <>
      {courseList.map((course) => {
        return <CourseItem course={course} key={course._id} />;
      })}
    </>
  );
};

const Courses = () => {
  const [courseList, setCourseList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await getCourseList();
      const courseList = response.body.message;
      setIsLoading(false);
      setCourseList(courseList);
    };
    fetchCourse();
  }, []);

  return (
    <>
      <p className="font-semibold text-2xl px-[6rem] pt-10 ">
        Recommended Courses
      </p>
      <div
        className={`relative text-center grid grid-cols-2 w-full pt-5 pb-4 px-[6rem] gap-y-5 sm:grid-cols-3 md:grid-cols-4 ${
          isLoading ? "h-[350px]" : ""
        }`}
      >
        {isLoading && (
          <Spinner parent={true} className="w-14 m-auto col-span-4" />
        )}
        {!isLoading && <CourseShowCase courseList={courseList} />}
        {!isLoading && !courseList.length && (
          <h1 className="space-x-3 text-xl font-semibold mx-24 mt-10 text-center">
            No Courses found
          </h1>
        )}
      </div>
      <Showcase />
    </>
  );
};

export default Courses;
