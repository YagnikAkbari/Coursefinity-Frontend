import React from "react";
import iPrimayUpload from "../../assets/icons/i-primary-upload.svg";
import UploadWidget from "../../Components/UploadWidget";

function DragNDrop({ setUploadResult, className }) {
  return (
    <>
      <UploadWidget
        className={`cursor-pointer border border-primary-700 rounded-md overflow-hidden w-fit ${className}`}
        setUploadResult={setUploadResult}
      >
        <div className="bg-[#eee3ff] px-3 py-4" draggable="true">
          <img src={iPrimayUpload} alt="upload primary" className="m-auto" />

          <h5 className="text-primary-700 mt-5 font-semibold tracking-[0.5px]">
            Click to upload
          </h5>
        </div>
      </UploadWidget>
    </>
  );
}

export default DragNDrop;
