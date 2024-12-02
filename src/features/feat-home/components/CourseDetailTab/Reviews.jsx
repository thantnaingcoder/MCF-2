import { Star } from "lucide-react";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";

const Reviews = () => {
  const progressAndStarArray = [
    {
      progress: 100,
      fillStarCount: 5,
      noFillStarCount: 0,
    },
    {
      progress: 80,
      fillStarCount: 4,
      noFillStarCount: 1,
    },
    {
      progress: 60,
      fillStarCount: 3,
      noFillStarCount: 2,
    },
    {
      progress: 40,
      fillStarCount: 2,
      noFillStarCount: 3,
    },
    {
      progress: 20,
      fillStarCount: 1,
      noFillStarCount: 4,
    },
  ];
  return (
    <div>
      <div>
        <h1 className=" font-heading text-[#171717] text-[20px] md:text-[31px] font-bold">
          Our student reviews
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className=" flex flex-col gap-2 items-center justify-center">
          <p className=" font-heading text-[31px] font-bold text-[#171717] ">
            4.5
          </p>
          <div className=" flex">
            {Array.from({ length: 4 }).map((_, index) => (
              <Star key={index} fill="#F7C32E" color="#F7C32E" />
            ))}
            <FaStarHalfAlt size={23} fill="#F7C32E" color="#F7C32E" />
          </div>
          <p className=" font-sans text-[20px] text-[#525252]">
            (Based on today reviews)
          </p>
        </div>
  
        <ProgressAndStar array={progressAndStarArray} />
      </div>
    </div>
  );
};

export default Reviews;

const ProgressAndStar = ({ array }) => {
  return (
    <div className=" flex flex-col gap-3">
      {array.map((item, index) => (
        <div key={index} className=" flex items-center gap-5">
          <Progress className=" bg-[#F0EADB]" value={item.progress} />
          <div className=" flex items-center gap-1">
            {Array.from({ length: item.fillStarCount }).map((_, index) => (
              <Star key={index} fill="#F7C32E" color="#F7C32E" />
            ))}
            {Array.from({ length: item.noFillStarCount }).map((_, index) => (
              <Star key={index} color="#F7C32E" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
