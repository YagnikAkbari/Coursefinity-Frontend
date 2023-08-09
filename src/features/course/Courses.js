import React from "react";

import CourseItem from "./components/CourseItem";

import img1 from "../../assets/inst1.svg";
import img2 from "../../assets/inst2.svg";
import img3 from "../../assets/inst3.svg";
import img4 from "../../assets/inst4.svg";

import { getCourseList } from "../../services/apiCourse";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const data = useLoaderData();
  const courseList = data.body.message;
  return (
    <>
      <p className="font-semibold text-2xl px-[6rem] pt-10 ">
        Recommended Courses
      </p>
      <div className="text-center grid grid-cols-2 w-full pt-5 pb-8 px-[6rem] gap-y-5 sm:grid-cols-3 md:grid-cols-4">
        {courseList.map((course) => {
          return <CourseItem course={course} key={course._id} />;
        })}
      </div>
      <p className="font-semibold text-2xl px-[6rem] pt-10">
        Learn form your favorite instructor
      </p>
      <div className="grid grid-cols-4 px-[6rem] py-5 gap-12">
        <img src={img1} alt="insttructor 1" />
        <img src={img2} alt="insttructor 2" />
        <img src={img3} alt="insttructor 3" />
        <img src={img4} alt="insttructor 4" />
      </div>
    </>
  );
};

export default Courses;

export async function loader() {
  const courseList = await getCourseList();
  return courseList;
}
