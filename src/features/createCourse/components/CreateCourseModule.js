import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../auth/form-hook";
import ipen from "../../../assets/icons/i-edit-pen.svg";
import iplus from "../../../assets/icons/i-black-plus.svg";
import UploadButton from "../../ui/UploadButton";
import UploadButtonModal from "../../ui/UploadButtonModal";
import UploadModal from "../../ui/UploadModal";
import Button from "../../ui/Button";
import Input from "../../ui/input";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import DragNDrop from "../../ui/DragNDrop";
import { stringConverter } from "../../../utils/helper";

const CreateCourseModule = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [assignment, setAssignment] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formState, inputHandler] = useForm(
    {
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const selectFileHandler = (files) => {
    setFiles(files);
  };

  const openModalHandler = () => {
    setIsModalOpen(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const handleCancelUpload = (event) => {
    event.stopPropagation();
    const selectedFileName =
      event.target.parentElement.querySelector("p").textContent;

    setFiles((prevState) => {
      return prevState.filter((file) => {
        return stringConverter(file.name, 15) !== selectedFileName;
      });
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/end-course");
  };

  const handleAssignmentSubmit = (event) => {
    event.preventDefault();
    console.log("assignment uplodad successful.");
  };

  const assignmentDropHandler = (files) => {
    setAssignment(files);
  };
  console.log(assignment);
  return (
    <div className="flex flex-col items-center m-auto mt-5 w-[24rem] max-h-[750px]">
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
        <ul>
          {files.map((file, index) => (
            <li
              key={index}
              className="bg-[#e5d4ff] w-fit flex items-center font-semibold gap-2 px-2 rounded-md mt-2"
            >
              <p className="text-primary-700">
                {stringConverter(file.name, 15)}
              </p>
              <span
                className="cursor-pointer text-black text-[1.85rem] font-light"
                onClick={handleCancelUpload}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 mt-5">
          <UploadButton content="Add video" onSelectFile={selectFileHandler} />
          <UploadButton
            content="Add quiz"
            accept=".docx,.pdf"
            onSelectFile={selectFileHandler}
          />
          <UploadButtonModal
            content="Add assignment"
            onOpenModal={openModalHandler}
            accept=".docx,.pdf"
            onSelectFile={selectFileHandler}
          />
          <UploadModal
            show={isModalOpen}
            onCancel={closeModalHandler}
            onSubmit={handleAssignmentSubmit}
            footer={<Button type="submit">Done</Button>}
            footerClass="mx-[1.5rem] px-0"
            headerClass="hidden"
          >
            <Input
              id="description"
              element="textarea"
              placeholder="Enter course description"
              validators={[VALIDATOR_REQUIRE()]}
              onInput={inputHandler}
              rows="7"
              errorText="Please enter a valid course description."
              className="w-full relative  rounded-[0.4rem] p-[0.8rem] mt-[0rem] border-0 focus:ring-0 bg-[#F4F4F4]"
            />
            <div className="mt-[3rem] text-xl tracking-[0.35px] font-semibold">
              Upload assignmeny description pdf
            </div>
            <DragNDrop
              className="mt-2"
              onDropFile={assignmentDropHandler}
              accept=".pdf"
            />
          </UploadModal>
        </div>
        <div className="w-full mt-6">
          <img src={iplus} alt="plus" className="m-auto w-10 cursor-pointer" />
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
