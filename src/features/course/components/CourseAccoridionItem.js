import React, { useState } from "react";
import videoImg from "../../../assets/icons/i-video.svg";
import quizImg from "../../../assets/icons/i-question-box.svg";
import assignImg from "../../../assets/icons/i-pad.svg";
import upArr from "../../../assets/icons/i-up-arrow.svg";
import downArr from "../../../assets/icons/i-down-arrow.svg";

const CourseAccoridionItem = ({ items }) => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay((prevState) => !prevState);
  };

  let imageUrl;

  switch (items.moduleType) {
    case "assignment":
      imageUrl = assignImg;
      break;
    case "quiz":
      imageUrl = quizImg;
      break;
    case "notes":
      imageUrl = assignImg;
      break;
    default:
      imageUrl = videoImg;
      break;
  }
  return (
    <>
      <div className="border-x-[1px] border-t-[1px] border-[#D0D0D0] last:border-b-[1px]">
        <button
          type="button"
          onClick={handleClick}
          id="accordion_header"
          className="w-full flex items-center gap-3 px-2 py-3"
        >
          {display && (
            <span>
              <img src={upArr} alt="up arrow" />
            </span>
          )}
          {!display && (
            <span>
              <img src={downArr} alt="up arrow" />
            </span>
          )}
          <div>{items.moduleTitle}</div>
        </button>
        {display && (
          <div id="accordion_body">
            <div className="flex items-center gap-3 px-9 pb-3">
              <span>
                <img src={imageUrl} alt={items.moduleTitle} />
              </span>
              {items.moduleDescription}
              <span>{items.moduleDuration}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseAccoridionItem;
