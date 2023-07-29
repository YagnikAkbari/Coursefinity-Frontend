import React from "react";

import CourseItem from "./CourseItem";

import img1 from "../../assets/inst1.svg";
import img2 from "../../assets/inst2.svg";
import img3 from "../../assets/inst3.svg";
import img4 from "../../assets/inst4.svg";

const DUMMY_COURSES = [
  {
    id: "f7de2f5d-5a42-5a24-9fa7-b8f0ac71d4eb",
    title: "Use Canva to submit stylish images and videos.",
    time: "8h 11m",
    imageUrl: "https://img-c.udemycdn.com/course/240x135/2561116_bb5d_3.jpg",
  },
  {
    id: "a54ff818-9aa6-5ea2-b53f-9e631a07e4e3",
    title: "Trading Mastery: A Guide to Intraday, Positional, and Invest",
    time: "24h 12m",
    imageUrl: "https://img-c.udemycdn.com/course/240x135/3771430_b8b3_3.jpg",
  },
  {
    id: "8a62214d-d28a-5b1d-a47f-b5a15c5810d8",
    title: "Web Developer Basics",
    time: "4h 51m",
    imageUrl: "https://img-c.udemycdn.com/course/240x135/3974902_b46b_2.jpg",
  },
  {
    id: "0bd69a01-dfa1-5f27-9de5-291b5419769c",
    title: "Selenium Automation in Excel",
    time: "12h 12m",
    imageUrl: "https://img-c.udemycdn.com/course/240x135/4281946_15ba.jpg",
  },
];

function Courses() {
  return (
    <>
      <p className="font-semibold text-2xl px-[6rem] pt-10 ">
        Recommended Courses
      </p>
      <div className="text-center grid grid-cols-4 w-full pt-5 pb-8 px-[6rem] ">
        {DUMMY_COURSES.map((course) => {
          return <CourseItem course={course} key={course.id} />;
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
}

export default Courses;
