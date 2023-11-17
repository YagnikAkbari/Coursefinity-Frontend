import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import Card from "../../ui/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToFavourite, removeFromFavourite } from "../favorite-slice";
import { getIsAuthenticated } from "../../auth/auth-slice";
import {
  deleteCourse,
  favouriteCourse,
  removefavouriteCourse,
} from "../../../services/apiCourse";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "../../ui/Spinner";

function CourseItem({
  course,
  view = "some",
  isPurchased = false,
  clickable = true,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const isAuthenticated = useSelector(getIsAuthenticated);

  const wishlistAddButtonHandler = async function (id) {
    if (!isAuthenticated) {
      return navigate("/auth/signin?mode=learner");
    }
    dispatch(addToFavourite(id));
    try {
      const response = favouriteCourse(id);
      const data = await response;
      console.log(data.body);
    } catch (err) {
      console.log(err.message);
    }
  };
  const wishlistRemoveButtonHandler = function (id) {
    if (!isAuthenticated) {
      return navigate("/auth/signin?mode=learner");
    }
    dispatch(removeFromFavourite(id));
    try {
      removefavouriteCourse(id);
    } catch (err) {
      console.log(err.message);
    }
  };

  const favouriteCoursesList = useSelector(
    (state) => state.favourite.favouriteCourses
  );

  const showCourseDetailHandler = (e, courseId) => {
    const elementId = e.target.parentElement.id;
    if (!clickable) {
      return;
    }
    if (elementId || e.target.id === "wishlist-icon") {
      return;
    } else if (isAuthenticated && isPurchased) {
      navigate(`/learning?id=${courseId}&module=1`);
    } else {
      navigate(`/${courseId}`);
    }
  };

  const deleteHandler = async () => {
    try {
      setLoading(true);
      const response = await deleteCourse(course._id);
      if (response.ok) {
        toast.success(response.body.message, {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }
      if (response.statusCode === 400) {
        toast.error(response.body.message, {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }
      setLoading(false);
    } catch (err) {
      navigate("/error");
    }
  };

  return (
    <Card
      courseId={course._id}
      className={`relative bg-white w-[85%]  overflow-hidden ${
        view === "all" ? "flex w-[96%] h-[200px]" : "block h-[300px]"
      } ${clickable ? "cursor-pointer" : ""}`}
      onClick={(e) => showCourseDetailHandler(e, course._id)}
    >
      <div>
        <img
          src={course.courseImageUrl}
          alt={course.courseTitle}
          className={`bg-cover ${
            view === "all"
              ? "h-[200px] w-[320px] overflow-hidden"
              : "w-full h-[180px]"
          }`}
        />
      </div>
      <div className="p-4 flex-grow ">
        <div className="flex justify-between text-stone-400">
          <p>{course.courseDuration || "12hr 99min"}</p>
          {!favouriteCoursesList.includes(course._id) && clickable && (
            <FontAwesomeIcon
              icon={regularHeart}
              onClick={() => wishlistAddButtonHandler(course._id)}
              id="wishlist-icon"
            />
          )}
          {favouriteCoursesList.includes(course._id) && clickable && (
            <FontAwesomeIcon
              icon={solidHeart}
              onClick={() => wishlistRemoveButtonHandler(course._id)}
              className="text-red-500"
              id="wishlist-icon"
            />
          )}
          {!clickable && (
            <button
              className="absolute right-5 bottom-5 flex items-center justify-center border border-red-200 h-12 px-4 md:px-6 rounded-full cursor-pointer focus:outline-none hover:bg-red-100 text-red-600 w-[95px]"
              onClick={deleteHandler}
            >
              {loading && (
                <Spinner
                  parent={true}
                  className="m-auto"
                  type="small"
                  status="delete"
                />
              )}
              {!loading && "Delete"}
            </button>
          )}
        </div>
        <h2 className="mt-3 text-left font-semibold">{course.courseTitle}</h2>
      </div>
    </Card>
  );
}

export default CourseItem;
