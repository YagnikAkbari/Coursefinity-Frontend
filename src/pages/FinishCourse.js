import React, { useState } from "react";
import Button from "../features/ui/Button";
import { Helmet } from "react-helmet";
import DragNDrop from "../features/ui/DragNDrop";
import { useNavigate, useParams } from "react-router-dom";

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

  const uploadThumbnail = (event) => {
    event.preventDefault();
    if (thumbnail) {
      const formData = new FormData();
      formData.append("image", thumbnail);
      formData.append("courseId", courseId);

      fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/uploadThumbnail`, {
        method: "POST",
        headers: {},
        credentials: "include",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            
          } else {
            console.log("error");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      navigate(`/created-course`);
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
