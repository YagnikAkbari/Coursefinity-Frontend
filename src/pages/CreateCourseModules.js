import React from "react";

import ipen from "../assets/icons/i-edit-pen.svg";
import Button from "../features/ui/Button";
import UploadButton from "../features/ui/UploadButton";

const CreateCourseModules = () => {
  const handleSubmit = () => {
    console.log("next");
  };
  const uploadHandler = (event) => {
    const fileInput = event.currentTarget.querySelector("#fileUpload");
    fileInput.click();
  };
  return (
    <div className="flex flex-col items-center m-auto mt-5 w-[24rem]">
      <h2 className="font-bold text-[1.5rem] leading-[1.8rem] text-center">
        Create your Course
      </h2>
      <div className="bg-white mt-28 w-[29rem] p-3">
        <div className="flex items-center space-x-3">
          <span className="opacity-[60%] text-[#23272C] text-xl font-bold">
            Module 1:
          </span>
          <span className="font-medium text-lg">Introduction</span>
          <div className="cursor-pointer inline-block">
            <img src={ipen} alt="pen" />
          </div>
        </div>
        <div className="mt-5">
          <UploadButton onClick={uploadHandler} content="Add video" />
          <UploadButton onClick={uploadHandler} content="Add quiz" />
          <UploadButton onClick={uploadHandler} content="Add assignment" />
        </div>
      </div>
      <form method="post" onSubmit={handleSubmit} className="w-full">
        <Button type="submit" className="mt-10">
          Next
        </Button>
      </form>
    </div>
  );
};

export default CreateCourseModules;
