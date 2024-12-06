import React from "react";

const LabelHeading = ({ label, heading }) => {
  return (
    <div className=" flex flex-col items-center gap-2 mb-10">
      <h1 className=" font-label text-[16px] md:text-[20px] text-[#FD9035] font-semibold">
        {label}
      </h1>
      <h1 className=" font-heading text-[20px] md:text-[26px] font-semibold">{heading}</h1>
    </div>
  );
};

export default LabelHeading;
