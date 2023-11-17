import React, { useRef } from "react";
import iPrimayUpload from "../../assets/icons/i-primary-upload.svg";

function DragNDrop(props) {
  const fileInputRef = useRef(null);

  const handleUploadAreaClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectedFile);
        props.onFileSelect(selectedFile);
      } catch (error) {
        console.error("File upload error:", error);
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    if (files.length > 0) {
      handleFileInputChange({ target: { files } });
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  return (
    <>
      <div
        className={`cursor-pointer border border-primary-700 rounded-md overflow-hidden w-fit ${props.className}`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleUploadAreaClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          accept={props.accept || ""}
          className="hidden"
          onChange={handleFileInputChange}
          multiple={false} // Allow only one file to be selected
        />
        <div
          className="bg-[#eee3ff] px-3 py-4"
          draggable="true"
          onDragStart={handleDragStart}
        >
          <img src={iPrimayUpload} alt="upload primary" className="m-auto" />

          <h5 className="text-primary-700 mt-5 font-semibold tracking-[0.5px]">
            Drag or click to upload
          </h5>
        </div>
      </div>
    </>
  );
}

export default DragNDrop;
