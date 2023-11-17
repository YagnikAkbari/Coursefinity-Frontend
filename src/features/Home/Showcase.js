import React from "react";
import img1 from "../../assets/inst1.svg";
import img2 from "../../assets/inst2.svg";
import img3 from "../../assets/inst3.svg";
import img4 from "../../assets/inst4.svg";

const Showcase = () => {
  return (
    <>
      <p className="font-semibold text-2xl px-[6rem] pt-10">
        Learn form your favorite instructor
      </p>
      <div className="grid grid-cols-4 px-[6rem] py-5 gap-12">
        <img src={img1} alt="instructor 1" />
        <img src={img2} alt="instructor 2" />
        <img src={img3} alt="instructor 3" />
        <img src={img4} alt="instructor 4" />
      </div>
    </>
  );
};

export default Showcase;
