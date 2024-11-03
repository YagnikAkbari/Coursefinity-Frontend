import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import { getMyCreatedCourses } from "../../../services/apiCourse";

import Spinner from "../../ui/Spinner";

const MyCreatedCourse = () => {
  const [myCourses, setMyCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMyCourses = async () => {
    try {
      const response = await getMyCreatedCourses();
      const myCoursesList = response.body.data;

      setMyCourses(myCoursesList);
    } catch (err) {
      console.error("ERROR FETCHING CREATED COURSE:-", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMyCourses();
  }, []);

  if (myCourses.length === 0 && !isLoading) {
    return (
      <>
        <div className="px-[6rem] pt-4 text-xl font-semibold">
          <h3>All our Courses</h3>
        </div>
        <h1 className="space-x-3 text-xl font-semibold mx-24 mt-10">
          No courses found!
        </h1>
      </>
    );
  }

  return (
    <>
      <div className="mx-24 mt-10 text-xl font-semibold">
        <h3>All your Courses</h3>
      </div>
      <div className="text-center grid grid-cols-2 gap-y-10 w-full pt-5 pb-8 px-[6rem] h-[350px]">
        {isLoading && (
          <Spinner parent={true} className="m-auto col-span-2 w-16" />
        )}
        {myCourses.map((course) => {
          return (
            <CourseItem
              course={course}
              key={course._id}
              view="all"
              isPurchased={true}
              clickable={false}
            />
          );
        })}
      </div>
    </>
  );
};

export default MyCreatedCourse;
