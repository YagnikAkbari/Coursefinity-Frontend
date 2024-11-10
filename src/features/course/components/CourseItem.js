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
import { toasterConfig } from "../../../utils/config";

function CourseItem({
  course,
  view = "some",
  isPurchased = false,
  clickable = true,
  showFavouriteIcon = false,
  favourite,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const isAuthenticated = useSelector(getIsAuthenticated);

  const wishlistAddButtonHandler = async function (id) {
    if (!isAuthenticated) {
      return navigate("/auth/signin?mode=learner");
    }

    try {
      const response = await favouriteCourse(id);
      if (response?.code === 200) {
        dispatch(addToFavourite(id));
      }
    } catch (err) {
      if (err?.response?.status === 404) {
        toast.error(err?.response?.data?.message ?? "Exception", toasterConfig);
      }
      if (err?.response?.status === 500) {
        navigate("/error");
      }
      console.error(err.message);
    }
  };
  const wishlistRemoveButtonHandler = async function (id) {
    if (!isAuthenticated) {
      return navigate("/auth/signin?mode=learner");
    }
    try {
      const response = await removefavouriteCourse(id);
      if (response?.code === 200) {
        dispatch(removeFromFavourite(id));
      }
    } catch (err) {
      console.error(err.message);
      if (err?.response?.status === 404) {
        toast.error(err?.response?.data?.message ?? "Exception", toasterConfig);
      }
      if (err?.response?.status === 500) {
        navigate("/error");
      }
    }
  };

  // const favouriteCoursesList = useSelector(
  //   (state) => state.favourite.favouriteCourses
  // );

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
      if (response?.code === 200) {
        toast.success(response?.message, toasterConfig);
      }
    } catch (err) {
      if (err?.response?.status === 404) {
        toast.error(err?.response?.data?.message ?? "Exception", toasterConfig);
      }
      if (err?.response?.status === 500) {
        navigate("/error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      courseId={course._id}
      className={`relative bg-white w-[85%] overflow-hidden ${
        view === "all" ? "flex w-[96%] h-[180px]" : "block h-[300px]"
      } ${clickable ? "cursor-pointer" : ""}`}
      onClick={(e) => showCourseDetailHandler(e, course._id)}
    >
      <div className="image-container">
        <img
          src={course.courseImageUrl}
          alt={course.courseTitle}
          className={`image ${
            view === "all"
              ? "w-all h-[180px] overflow-hidden"
              : "w-full h-[180px]"
          }`}
        />
      </div>

      <div className="p-4 flex-grow ">
        <div className="flex justify-between text-stone-400">
          <p>{course.courseDuration || "12hr 99min"}</p>
          {showFavouriteIcon && !favourite && clickable && (
            <FontAwesomeIcon
              icon={regularHeart}
              onClick={() => wishlistAddButtonHandler(course._id)}
              id="wishlist-icon"
            />
          )}
          {showFavouriteIcon && favourite && clickable && (
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
