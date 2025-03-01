import React, { useEffect, useRef } from "react";

const UploadWidget = ({ setUploadResult, children, className }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log(cloudinaryRef.current);

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setUploadResult(result.info.secure_url ?? result.info.url);
        }
      }
    );
  }, [setUploadResult]);
  return (
    <button onClick={() => widgetRef.current.open()} className={className}>
      {children}
    </button>
  );
};

export default UploadWidget;
