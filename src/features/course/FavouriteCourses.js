import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import CourseItem from "./CourseItem";
import { getCourseList } from "../../services/apiCourse";

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
    <div className="text-center grid grid-cols-4 w-full pt-5 pb-8 px-[6rem] gap-y-5">
      {favouriteCoursesList.map((course) => {
        return <CourseItem course={course} key={course._id} />;
      })}
    </div>
  );
}

export default FavouriteCourses;

export async function loader() {
  const courseList = await getCourseList();
  return courseList;
}
