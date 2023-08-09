import React, { useState } from "react";
import upArr from "../../../assets/icons/i-up-arrow.svg";
import downArr from "../../../assets/icons/i-down-arrow.svg";

import CourseAccordionContent from "./CourseAccordionContent";

const CourseAccoridionItem = ({ items }) => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay((prevState) => !prevState);
  };
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
          <div>{items.title}</div>
        </button>
        {display && (
          <div id="accordion_body">
            {items.body.map((content) => (
              <CourseAccordionContent content={content} key={content.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CourseAccoridionItem;
