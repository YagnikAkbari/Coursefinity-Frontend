import React, { useEffect, useState } from "react";
import Button from "../features/ui/Button";
import { Helmet } from "react-helmet";
import DragNDrop from "../features/ui/DragNDrop";
import { useNavigate } from "react-router-dom";
import { createCourse } from "../services/apiCourse";
import { toast } from "react-toastify";
import { toasterConfig } from "../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { courseImage } from "../features/createCourse/create-course-slice";

const FinishCourse = () => {
  const [uploadResult, setUploadResult] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.createCourse);

  useEffect(() => {
    if (uploadResult) {
      const { courseImageUrl = [] } = JSON.parse(JSON.stringify(courseData));
      dispatch(
        courseImage({
          thumbnail: [...courseImageUrl, uploadResult],
        })
      );
    }
  }, [uploadResult]);

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
        <DragNDrop className="mt-2" setUploadResult={setUploadResult} />
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
