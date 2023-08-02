import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import Card from "../ui/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToFavourite, removeFromFavourite } from "./favorite-slice";
import { getIsAuthenticated } from "../auth/auth-slice";

function CourseItem({ course, view = "some" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isInWishlist, setIsInWishlist] = useState();

  const isAuthenticated = useSelector(getIsAuthenticated);

  const wishlistButtonHandler = function (id) {
    setIsInWishlist((prevState) => !prevState);
    if (!isInWishlist && isAuthenticated) {
      dispatch(addToFavourite(id));
    } else if (isInWishlist && isAuthenticated) {
      dispatch(removeFromFavourite(id));
    } else {
      navigate("/auth/signin?mode=learner");
    }
  };

  const showCourseDetailHandler = (e, courseId) => {
    const elementId = e.target.parentElement.id;
    if (elementId || e.target.id === "wishlist-icon") {
      return;
    } else {
      navigate(`/${courseId}`);
    }
  };

  return (
    <Card
      courseId={course.id}
      className={`bg-white w-[85%]  overflow-hidden cursor-pointer ${
        view === "all" ? "flex w-[96%]" : "block"
      }`}
      onClick={(e) => showCourseDetailHandler(e, course.id)}
    >
      <div>
        <img
          src={course.imageUrl}
          alt={course.title}
          className={`bg-cover ${
            view === "all" ? "h-[180px]" : "w-full h-[180px]"
          }`}
        />
      </div>
      <div className="p-4 flex-grow ">
        <div className="flex justify-between text-stone-400">
          <p>{course.time}</p>
          {!isInWishlist && (
            <FontAwesomeIcon
              icon={regularHeart}
              onClick={() => wishlistButtonHandler(course.id)}
              id="wishlist-icon"
            />
          )}
          {isInWishlist && (
            <FontAwesomeIcon
              icon={solidHeart}
              onClick={() => wishlistButtonHandler(course.id)}
              className="text-red-500"
              id="wishlist-icon"
            />
          )}
        </div>
        <h2 className="mt-3 text-left font-semibold">{course.title}</h2>
      </div>
    </Card>
  );
}

export default CourseItem;
