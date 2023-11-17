import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backimage from "../../../assets/icons/i-back-arrow.png";

import iplus from "../../../assets/icons/i-black-plus.svg";
import Button from "../../ui/Button";
import ModuleContent from "./ModuleContent";

const CreateCourseModule = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [moduleIds, setModuleIds] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/end-course");
  };
  const addModuleHndler = () => {
    setCount((prevState) => +prevState + 1);
  };

  useEffect(() => {
    // Generate unique module IDs when the component mounts
    const newModuleIds = Array(count)
      .fill(0)
      .map((_, index) => index);
    setModuleIds(newModuleIds);
  }, [count]);

  const goBackHandler = () => {
    navigate("/create-course/2");
  };

  return (
    <div className="flex flex-col items-center m-auto mt-5 w-[24rem]">
      <img
        src={backimage}
        alt="back arrow"
        className="w-10 cursor-pointer fixed left-5"
        onClick={goBackHandler}
      />

      <h2 className="font-bold text-[1.5rem] leading-[1.8rem] text-center">
        Create your Course
      </h2>
      <div className="bg-white mt-28 w-[29rem] p-3 overflow-x-visible">
        {moduleIds.map((moduleId, index) => (
          <ModuleContent key={moduleId} count={index + 1} moduleId={moduleId} />
        ))}
        <div className="w-full mt-6">
          <img
            src={iplus}
            alt="plus"
            className="m-auto w-10 cursor-pointer hover:scale-[1.1] transition-all duration-[300ms]"
            onClick={addModuleHndler}
          />
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

export default CreateCourseModule;
