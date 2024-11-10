import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  VALIDATOR_MAX,
  VALIDATOR_MIN,
  VALIDATOR_REQUIRE,
} from "../utils/validators";
import Button from "../features/ui/Button";
import useForm from "../features/auth/form-hook";
import Input from "../features/ui/input";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import backimage from "../assets/icons/i-back-arrow.png";
import { createCourse } from "../services/apiCourse";
import { toast } from "react-toastify";
import { toasterConfig } from "../utils/config";

const EndCoursePage = () => {
  const navigate = useNavigate();
  const courseData = useSelector((state) => state.createCourse);
  const [isTouched, setIsTouched] = useState(false);
  const [formState, inputHandler] = useForm(
    {
      price: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const goBackHandler = () => {
    navigate("/create-module");
  };

  const courseFinishHandler = async (event) => {
    event.preventDefault();
    setIsTouched(true);
    if (!formState.isValid) {
      return;
    }

    try {
      const response = await createCourse({
        ...courseData,
        coursePrice: formState.inputs.price.value,
      });

      if (response?.code === 201) {
        navigate(`/finish-course/${response?.courseId}`);
      }
    } catch (err) {
      console.error(`${err.message}💥💥💥💥💥💥`);
      if (err?.response?.status === 404) {
        toast.error(err?.response?.data?.message ?? "Exception", toasterConfig);
      }
      if (err?.response?.status === 500) {
        navigate("/error");
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Course summary | coursefinity</title>
        <meta
          name="description"
          content="coursefinity are here to meet indian educators with the student from every corner of india"
        />
      </Helmet>
      <div className="flex flex-col m-auto mt-5 w-[24rem]">
        <img
          src={backimage}
          alt="back arrow"
          className="w-10 cursor-pointer fixed left-5"
          onClick={goBackHandler}
        />
        <h2 className="font-bold text-[1.5rem] leading-[1.8rem] text-center">
          Create your Course
        </h2>
        <form method="post" onSubmit={courseFinishHandler}>
          <Input
            id="price"
            type="text"
            element="input"
            placeholder="Enter course price"
            isTouched={isTouched}
            validators={[
              VALIDATOR_REQUIRE(),
              VALIDATOR_MIN(0),
              VALIDATOR_MAX(10000),
            ]}
            onInput={inputHandler}
            errorText="Please enter a valid course price (0-10000)."
            className="w-full relative rounded-[0.4rem] p-[0.8rem] mt-[2rem] border-0 focus:ring-0 ml-auto"
          />

          <Button type="submit" className="mt-10">
            submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default EndCoursePage;
