import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import Spinner from "../../ui/Spinner";
import { getMyCourses } from "../../../services/apiCourse";
import { useNavigate } from "react-router-dom";

const MyCourse = () => {
  const navigate = useNavigate();
  const [myCourses, setMyCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchmyCourses = async () => {
      try {
        const response = await getMyCourses();
        const myCoursesIdList = response?.data;

        setMyCourses(myCoursesIdList ?? []);
      } catch (err) {
        console.error("ERROR FETCHING USER COURSE:-", err);
        if (err?.response?.status === 500) {
          navigate("/error");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchmyCourses();
  }, []);

  if (myCourses.length === 0 && !isLoading) {
    return (
      <>
        <h1 className="space-x-3 text-xl font-semibold mx-24 mt-10">
          No courses found! Learn a Course
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
            />
          );
        })}
      </div>
    </>
  );
};

export default MyCourse;
