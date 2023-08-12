import React from "react";
import iprimaryplus from "../../assets/icons/i-primary-plus.svg";

const UploadButton = ({ content, onClick }) => {
  return (
    <>
      <div
        className="flex items-center bg-[#F2E3FE] rounded-full px-2 py-1 w-fit mt-2 cursor-pointer relative "
        onClick={onClick}
      >
        <input
          type="file"
          className="absolute h-full w-full hidden"
          id="fileUpload"
        />
        <img
          src={iprimaryplus}
          className="inline mr-3 mt-[2px]"
          alt="primary plus"
        />
        <span className="text-primary-700">{content}</span>
      </div>
    </>
  );
};

export default UploadButton;
