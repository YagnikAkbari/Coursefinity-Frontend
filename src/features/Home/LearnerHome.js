import CourseItem from "../course/components/CourseItem";
import { Link, useLoaderData } from "react-router-dom";

function LearnerHome() {
  const data = useLoaderData();
  const courseList = data.body.message;

  return (
    <>
      <h1 className="space-x-3 text-xl font-semibold mx-24 mt-10">
        <span>Continue your learning Courses</span>
        <Link className="text-primary-700" to="/my-courses">
          View all
        </Link>
      </h1>
      <div
        className={`text-center grid w-full pt-5 pb-8 px-[6rem] gap-y-5 grid-cols-4`}
      >
        {courseList.map((course) => {
          return <CourseItem course={course} key={course._id} />;
        })}
      </div>
    </>
  );
}

export default LearnerHome;
