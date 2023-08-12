import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../features/auth/form-hook";
import { VALIDATOR_REQUIRE } from "../utils/validators";
import Input from "../features/ui/input";
import Button from "../features/ui/Button";

const CreateCoursePage = () => {
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
    navigate("/create-module");
  };

  return (
    <div className="flex flex-col m-auto mt-5 w-[24rem]">
      <h2 className="font-bold text-[1.5rem] leading-[1.8rem] text-center">
        Create your Course
      </h2>

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
    </div>
  );
};

export default CreateCoursePage;
