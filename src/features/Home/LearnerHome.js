import CourseItem from "../course/components/CourseItem";
import { Link } from "react-router-dom";
import Spinner from "../ui/Spinner";
import { useEffect, useState } from "react";
import {
  getCourseList,
  getFavouriteCoursesIdList,
  getMyCourses,
} from "../../services/apiCourse";
import { setFavouriteCourses } from "../course/favorite-slice";
import { useDispatch, useSelector } from "react-redux";

const CourseShowCase = ({ courseList, isPurchased, favCourses = [] }) => {
  return (
    <>
      {courseList &&
        courseList?.map((course) => {
          return (
            <CourseItem
              course={course}
              key={course._id}
              isPurchased={isPurchased}
              showFavouriteIcon={true}
              favourite={favCourses?.includes(course._id) ? true : false}
            />
          );
        })}
    </>
  );
};

function LearnerHome() {
  const dispatch = useDispatch();
  const { favouriteCoursesIds } = useSelector((state) => state?.favourite);
  const [courseList, setCourseList] = useState([]);
  const [myCourseList, setMyCourseList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMyLoading, setIsMyLoading] = useState(true);

  useEffect(() => {
    const purchasedCourses = async () => {
      try {
        const responseMyList = await getMyCourses();
        const myCourseList = responseMyList.body.data;

        setIsMyLoading(false);
        setMyCourseList(myCourseList);
      } catch (err) {
        console.error("Errot Get Purchased Courses:-", err);
      }
    };

    const fetchAllCourse = async () => {
      try {
        const response = await getCourseList();
        const coursesList = response.body.data;

        setCourseList(coursesList);
        setIsLoading(false);
      } catch (err) {
        console.error("Errot Get Courses:-", err);
      }
    };
    const favouriteCourses = async () => {
      try {
        const response = await getFavouriteCoursesIdList();
        const favCoursesListId = response.body.data;

        dispatch(setFavouriteCourses(favCoursesListId));
      } catch (err) {
        console.error("Errot Get Courses:-", err);
      }
    };

    fetchAllCourse();
    favouriteCourses();
    purchasedCourses();
  }, []);

  return (
    <>
      <h1 className="space-x-3 text-xl font-semibold mx-24 mt-10">
        <span>Continue your learning Courses</span>
        <Link className="text-primary-700" to="/my-courses">
          View all
        </Link>
      </h1>
      <div
        className={`text-center grid w-full pt-5 pb-8 px-[6rem] gap-y-5 ${
          isLoading ? "h-[350px]" : ""
        } ${myCourseList.length !== 0 ? "grid-cols-4" : "grid-cols-1"}`}
      >
        {isMyLoading ? (
          <Spinner parent={true} className="w-14 m-auto col-span-4" />
        ) : myCourseList && myCourseList?.length > 0 ? (
          <CourseShowCase
            courseList={myCourseList}
            isPurchased={true}
            favCourses={favouriteCoursesIds}
          />
        ) : (
          <h1 className="space-x-3 text-xl font-semibold mx-24 mt-10 h-[10px]">
            No courses found! Learn a Course
          </h1>
        )}
      </div>
      <h1 className="space-x-3 text-xl font-semibold mx-24 mt-10">
        <span>Recommended Courses</span>
      </h1>
      <div
        className={`text-center grid w-full pt-5 pb-8 px-[6rem] gap-y-5 grid-cols-4 h-[350px]`}
      >
        {isLoading ? (
          <Spinner parent={true} className="w-14 m-auto col-span-4" />
        ) : courseList && courseList?.length > 0 ? (
          <CourseShowCase
            courseList={courseList}
            favCourses={favouriteCoursesIds}
          />
        ) : (
          <h1 className="space-x-3 text-xl font-semibold mx-24 mt-10 text-center">
            No Courses found
          </h1>
        )}
      </div>
    </>
  );
}

export default LearnerHome;
