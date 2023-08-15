import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateCourseMainContent from "./components/CreateCourseMainContent";
import DropDown from "../ui/DropDown";
import Button from "../ui/Button";

const CreateCourses = () => {
  const navigate = useNavigate();
  const page = useParams().step;
  let content;

  if (page === "1") {
    content = <CreateCourseMainContent />;
  }

  if (page === "2") {
    content = (
      <>
        <DropDown
          main="Course category"
          subMenu={["Design", "Developement", "UI/UX"]}
          nameType="secondary"
          className="mt-5"
        />
        <DropDown
          main="Course language"
          subMenu={[
            "gujarati",
            "English",
            "spenish",
            "hindi",
            "dutch",
            "german",
          ]}
          nameType="secondary"
          className="mt-5"
        />
        <DropDown
          main="Course duration"
          subMenu={["1 hour", "2 hour", "3 hour"]}
          nameType="secondary"
          className="mt-5"
        />
        <Button
          type="submit"
          className="mt-10"
          onClick={() => navigate("/create-module")}
        >
          Next
        </Button>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col m-auto mt-5 w-[24rem]">
        <h2 className="font-bold text-[1.5rem] leading-[1.8rem] text-center">
          Create your Course
        </h2>
        {content}
      </div>
    </>
  );
};

export default CreateCourses;
