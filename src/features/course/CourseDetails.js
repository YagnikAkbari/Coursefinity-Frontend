import img1 from "../../assets/instructor.jpg";
import i1 from "../../assets/icons/i-language.svg";
import i2 from "../../assets/icons/i-clcok.svg";
import i3 from "../../assets/icons/i-question-box.svg";
import i4 from "../../assets/icons/i-pad.svg";
import Button from "../ui/Button";

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
      <div className="grid grid-cols-3 text-md px-[6rem] py-6 gap-6 relative">
        <div className="w-full h-[500px] col-span-2">
          <img
            src={img1}
            alt="details"
            className="bg-top bg-contain h-full w-full"
          />
        </div>
        <div className="sticky top-[10%] left-0 bg-white p-[28px]">
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
        <div className="bg-white col-span-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem
            officiis neque reprehenderit nesciunt voluptas!
          </p>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;

export async function loader({ request, params }) {
  // console.log(request, "\n", params);
  return null;
}
