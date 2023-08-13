import React from "react";
import CourseItem from "./CourseItem";

const MyCourse = () => {
  return (
    <>
      <div className="px-[6rem] pt-4 text-xl font-semibold">
        <h3>All our Courses</h3>
      </div>
      <div className="text-center grid grid-cols-2 gap-y-10 w-full pt-5 pb-8 px-[6rem] ">
        {[].map((course) => {
          return <CourseItem course={course} key={course._id} view="all" />;
        })}
      </div>
    </>
  );
};

export default MyCourse;
