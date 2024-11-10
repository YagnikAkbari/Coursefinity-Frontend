import React, { useState } from "react";
import Button from "../features/ui/Button";
import { Helmet } from "react-helmet";
import DragNDrop from "../features/ui/DragNDrop";
import { useNavigate, useParams } from "react-router-dom";
import { uploadCourseThumbnail } from "../services/apiCourse";
import { toast } from "react-toastify";
import { toasterConfig } from "../utils/config";

const FinishCourse = () => {
  const [thumbnail, setThumbnail] = useState([]);
  const navigate = useNavigate();
  const { courseId } = useParams();

  const assignmentDropHandler = (files) => {
    setThumbnail(files);
  };

  const handleFileSelect = (file) => {
    setThumbnail(file);
  };

  const uploadThumbnail = async (event) => {
    event.preventDefault();
    if (thumbnail) {
      try {
        const formData = new FormData();
        formData.append("image", thumbnail);
        formData.append("courseId", courseId);
        const response = await uploadCourseThumbnail(formData);
        if (response.code === 200) {
          navigate(`/created-course`);
        }
      } catch (error) {
        if (error?.response?.status === 500) {
          navigate("/error");
        } else {
          toast.error(error?.response?.data?.message, toasterConfig);
        }
        console.error(error);
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
      <form onSubmit={uploadThumbnail} encType="multipart/form-data">
        <div className="mt-[3rem] text-xl tracking-[0.35px] font-semibold text-[#585858]">
          Upload thumbnail for your course
        </div>
        <DragNDrop
          className="mt-2"
          onDropFile={assignmentDropHandler}
          accept=".jpg,.jpeg,.png,.gif,.svg"
          onFileSelect={handleFileSelect}
        />
        <div>
          <Button type="submit" className="mt-10">
            Store Data
          </Button>
        </div>
      </form>
    </>
  );
};

export default FinishCourse;
