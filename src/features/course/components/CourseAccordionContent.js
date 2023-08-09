import React from "react";
import videoImg from "../../../assets/icons/i-video.svg";
import quizImg from "../../../assets/icons/i-question-box.svg";
import assignImg from "../../../assets/icons/i-pad.svg";

const CourseAccordionContent = ({ content }) => {
  let imageUrl;

  switch (content.type) {
    case "assignment":
      imageUrl = assignImg;
      break;
    case "quiz":
      imageUrl = quizImg;
      break;
    default:
      imageUrl = videoImg;
      break;
  }
  return (
    <div>
      <div key={content.id} className="flex items-center gap-3">
        <span>
          <img src={imageUrl} alt={content.content} />
        </span>
        {content.content}
      </div>
    </div>
  );
};

export default CourseAccordionContent;
