import React from "react";
import { Helmet } from "react-helmet";
import { VALIDATOR_REQUIRE } from "../utils/validators";
import Button from "../features/ui/Button";
import useForm from "../features/auth/form-hook";
import Input from "../features/ui/input";
import DragNDrop from "../features/ui/DragNDrop";

const EndCoursePage = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const assignmentDropHandler = async (files) => {
    console.log("handle thumbnail upload state");
    const formData = new FormData();
    formData.append("file", files);
    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });
      console.log(response);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const handleSubmit = async (event) => {
    console.log("course finished.");
  };
  const formData = new FormData();

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
        <h2 className="font-bold text-[1.5rem] leading-[1.8rem] text-center">
          Create your Course
        </h2>
        <form method="post" onSubmit={handleSubmit}>
          <Input
            id="title"
            type="text"
            element="input"
            placeholder="Enter course Price"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            errorText="Please enter a valid course name."
            className="w-full relative rounded-[0.4rem] p-[0.8rem] mt-[2rem] border-0 focus:ring-0 ml-auto"
          />
          <div className="mt-[3rem] text-xl tracking-[0.35px] font-semibold text-[#585858]">
            Upload thumbnail for your course
          </div>
          <DragNDrop
            className="mt-2"
            onDropFile={assignmentDropHandler}
            accept=".jpg,.jpeg,.png,.gif,.svg"
          />

          <Button type="submit" className="mt-10">
            Finish
          </Button>
        </form>
      </div>
    </>
  );
};

export default EndCoursePage;
