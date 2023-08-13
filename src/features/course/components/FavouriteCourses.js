import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import CourseItem from "./CourseItem";
import { getCourseList } from "../../../services/apiCourse";

function FavouriteCourses() {
  const data = useLoaderData().body.message;

  const favouriteCourses = useSelector(
    (state) => state.favourite.favouriteCourses
  );

  const favouriteCoursesList = data.filter((course) =>
    favouriteCourses.includes(course._id)
  );

  if (!favouriteCoursesList.length) {
    return <p>No Fav item</p>;
  }
  return (
    <div>
      <div className="px-[6rem] pt-4 text-xl font-semibold">
        <h3>Wish listed courses</h3>
      </div>
      <div className="text-center grid grid-cols-2 gap-y-10 w-full pt-5 pb-8 px-[6rem] ">
        {favouriteCoursesList.map((course) => {
          return <CourseItem course={course} key={course._id} view="all" />;
        })}
      </div>
    </div>
  );
}

export default FavouriteCourses;

export async function loader() {
  const courseList = await getCourseList();
  return courseList;
}
