import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CourseTitleAndDescription from "./components/CourseTitleAndDescription";
import DropDown from "../ui/DropDown";
import Button from "../ui/Button";
import { courseMatrixs } from "./create-course-slice";
import { useDispatch } from "react-redux";
import backimage from "../../assets/icons/i-back-arrow.png";

const CreateCourses = () => {
  const [selectedFromDropdown, setSelectedFromDropdown] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const page = useParams().step;
  let content;

  const submitHandler = () => {
    if (selectedFromDropdown.length !== 3) {
      return;
    }
    let matrix = {};
    selectedFromDropdown.forEach((item) => {
      if (item.id === "category") {
        matrix.courseCategory = item.value;
      }
      if (item.id === "language") {
        matrix.courseLanguage = item.value;
      }
      if (item.id === "duration") {
        matrix.courseDuration = item.value;
      }
    });

    dispatch(courseMatrixs({ ...matrix }));
    navigate("/create-module");
  };

  const goBackHandler = () => {
    navigate("/create-course/1");
  };

  const dropdownSelectHandler = (val, id) => {
    setSelectedFromDropdown((prevState) => {
      // if id exist then change the value after finding that id
      // other wist add the new
      const existingItemIndex = selectedFromDropdown.findIndex((item) => {
        return item.id === id;
      });
      if (existingItemIndex !== -1) {
        const updatedState = [...prevState];
        updatedState[existingItemIndex] = {
          ...updatedState[existingItemIndex],
          value: val,
        };
        return updatedState;
      }
      return [...prevState, { value: val, id: id }];
    });
  };

  if (page === "1") {
    content = <CourseTitleAndDescription />;
  }

  if (page === "2") {
    content = (
      <>
        <DropDown
          main="Course category"
          subMenu={[
            "Developement",
            "Business",
            "Finance & Accounting",
            "IT & Software",
            "Design",
          ]}
          nameType="secondary"
          className="mt-5"
          id="category"
          onDropdown={dropdownSelectHandler}
        />

        <DropDown
          main="Course language"
          subMenu={[
            "Gujarati",
            "English",
            "Spanish",
            "Hindi",
            "Dutch",
            "German",
          ]}
          nameType="secondary"
          className="mt-5"
          id="language"
          onDropdown={dropdownSelectHandler}
        />

        <DropDown
          main="Course duration"
          subMenu={["4 Weeks*", "8 Weeks*", "12 Weeks*", "16 Weeks*"]}
          nameType="secondary"
          className="mt-5"
          id="duration"
          onDropdown={dropdownSelectHandler}
        />

        <Button type="submit" className="mt-10" onClick={submitHandler}>
          Next
        </Button>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col m-auto mt-5 w-[24rem]">
        {page !== "1" && (
          <img
            src={backimage}
            alt="back arrow"
            className="w-10 cursor-pointer fixed left-5"
            onClick={goBackHandler}
          />
        )}
        <h2 className="font-bold text-[1.5rem] leading-[1.8rem] text-center">
          Create your Course
        </h2>
        {content}
      </div>
    </>
  );
};

export default CreateCourses;
