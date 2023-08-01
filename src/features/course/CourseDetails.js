import img1 from "../../assets/instructor.jpg";
import i1 from "../../assets/icons/i-language.svg";
import i2 from "../../assets/icons/i-clcok.svg";
import i3 from "../../assets/icons/i-question-box.svg";
import i4 from "../../assets/icons/i-pad.svg";
import Button from "../ui/Button";

import CourseAccordion from "./components/CourseAccordion";

const course_detail = {
  title: "The Web Developer Bootcamp 2023",
  description:
    "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps",
  language: "English",
  duration: 24,
  quiz: 4,
  assignment: 2,
};

function CourseDetails() {
  return (
    <>
      <div className="grid grid-cols-3 text-md px-[6rem] py-6 gap-6 relative ">
        <div className="w-full h-[500px] col-span-2 ">
          <img
            src={img1}
            alt="details"
            className="bg-top bg-contain h-full w-full"
          />
        </div>
        <div className="sticky top-[10%] left-0 bg-white p-[28px] border-[#D0D0D0] border">
          <h2 className="text-[40px] font-semibold leading-[48px] pt-3">
            {course_detail.title}
          </h2>
          <p className="text-base leading-[19.2px] text-[#717E8E]">
            {course_detail.description}
          </p>
          <div>
            <p className="pt-3">
              <span className="inline-block mr-3">
                <img src={i1} alt="" />
              </span>
              {course_detail.language}
            </p>
            <p className="pt-3">
              <span className="inline-block  mr-3">
                <img src={i2} alt="" />
              </span>
              {`${course_detail.duration} hours Lecture Video`}
            </p>
            <p className="pt-3">
              <span className="inline-block  mr-3">
                <img src={i3} alt="" />
              </span>
              {`${course_detail.quiz} Quiz`}
            </p>
            <p className="pt-3">
              <span className="inline-block  mr-3">
                <img src={i4} alt="" />
              </span>

              {`${course_detail.assignment} Assigment`}
            </p>
            <p className="font-bold text-4xl mt-5">&#x20B9;499</p>
          </div>
          <Button className="mt-2 text-xl font-semibold">Buy now</Button>
        </div>
        <div className="bg-white col-span-2 border-[#D0D0D0] border">
          <CourseAccordion />
        </div>
        <div className="border-[#D0D0D0] border z-50 px-5 py-3 flex gap-5 items-center bg-white">
          <img
            src={img1}
            alt="instructor"
            className="w-[5rem] h-[5rem] rounded-full"
          />
          <div>
            <p className="text-base font-semibold">instructor:</p>
            <p className="text-lg font-medium text-gray-400">Jenny Wilson</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;
