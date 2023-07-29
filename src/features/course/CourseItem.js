import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import Card from "../ui/Card";
import { useNavigate } from "react-router-dom";

function CourseItem({ course }) {
  const [isInWishlist, setIsInWishlist] = useState();

  const wishlistButtonHandler = function () {
    setIsInWishlist(!isInWishlist);
  };

  const navigate = useNavigate();

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
      className="bg-white w-[75%] rounded-2xl overflow-hidden cursor-pointer"
      onClick={(e) => showCourseDetailHandler(e, course.id)}
    >
      <figure>
        <img
          src={course.imageUrl}
          alt={course.title}
          className="bg-cover w-full"
        />
      </figure>
      <div className="p-4">
        <div className="flex justify-between text-stone-400">
          <p>{course.time}</p>
          {!isInWishlist && (
            <FontAwesomeIcon
              icon={regularHeart}
              onClick={wishlistButtonHandler}
              id="wishlist-icon"
            />
          )}
          {isInWishlist && (
            <FontAwesomeIcon
              icon={solidHeart}
              onClick={wishlistButtonHandler}
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
