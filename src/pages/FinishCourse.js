import React, { useState } from "react";
import Button from "../features/ui/Button";
import { Helmet } from "react-helmet";
import DragNDrop from "../features/ui/DragNDrop";
import { useNavigate } from "react-router-dom";
import { createCourse, uploadCourseThumbnail } from "../services/apiCourse";
import { toast } from "react-toastify";
import { toasterConfig } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { courseImage } from "../features/createCourse/create-course-slice";

const FinishCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.createCourse);
  const handleFileSelect = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await uploadCourseThumbnail(formData);
      const { courseImageUrl = [] } = JSON.parse(JSON.stringify(courseData));

      dispatch(
        courseImage({
          thumbnail: [...courseImageUrl, response?.data?.url],
        })
      );
    } catch (error) {
      if (error?.response?.status === 500) {
        navigate("/error");
      } else {
        toast.error(error?.response?.data?.message, toasterConfig);
      }
      console.error(error);
    }
  };

  const handleCreateCourse = async () => {
    try {
      const response = await createCourse({
        ...courseData,
        courseImageUrl: courseData.courseImageUrl?.[0],
      });

      if (response?.code === 201) {
        navigate("/created-course");
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
          content="coursefinity is here to connect Indian educators with students from every corner of India"
        />
      </Helmet>
      <div style={{ width: "320px" }}>
        <div className="mt-[3rem] text-xl tracking-[0.35px] font-semibold text-[#585858]">
          Upload thumbnail for your course
        </div>
        <DragNDrop
          className="mt-2"
          onDropFile={handleFileSelect}
          accept=".jpg,.jpeg,.png,.gif,.svg"
          onFileSelect={handleFileSelect}
        />
        {courseData?.courseImageUrl?.length > 0 &&
          courseData?.courseImageUrl.map((url, idx) => (
            <img src={url} alt="local" key={idx} />
          ))}
        <Button type="submit" className="mt-10" onClick={handleCreateCourse}>
          Create Course
        </Button>
      </div>
    </>
  );
};

export default FinishCourse;
