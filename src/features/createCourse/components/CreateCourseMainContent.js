import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../auth/form-hook";
import Input from "../../ui/input";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import Button from "../../ui/Button";

const CreateCourseMainContent = () => {
  const navigate = useNavigate();
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
  const handleSubmit = async (event) => {
    navigate("/create-course/2");
  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <Input
        id="title"
        type="text"
        element="input"
        placeholder="Enter course name"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="Please enter a valid course name."
        className="w-full relative rounded-[0.4rem] p-[0.8rem] mt-[2rem] border-0 focus:ring-0 ml-auto"
      />
      <Input
        id="description"
        element="textarea"
        placeholder="Enter course description"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="Please enter a valid course description."
        className="w-full relative  rounded-[0.4rem] p-[0.8rem] mt-[1.5rem] border-0 focus:ring-0"
      />
      <Button type="submit" className="mt-10" disabled={!formState.isValid}>
        Next
      </Button>
    </form>
  );
};

export default CreateCourseMainContent;
