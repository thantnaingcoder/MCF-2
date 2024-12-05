import { Star } from "lucide-react";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Progress } from "@/components/ui/progress";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
    <div className="">
      <div>
        <h1 className=" text-center md:text-start md:ms-5 font-heading mb-4 text-[#171717] text-[20px] md:text-[31px] font-bold">
          Our student reviews
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
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

      <div className=" mt-10 flex flex-col gap-2 md:gap-6 lg:gap-10">
        {Array.from({ length: 2 }).map((_, index) => (
          <StudentReview key={index} />
        ))}
      </div>

      {/* form */}
      <div className=" mt-10">
        <form className=" flex flex-col gap-3">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" flex flex-col gap-1">
              <label className=" font-heading text-[#262626]">Name</label>
              <Input />
            </div>
            <div className=" flex flex-col gap-1">
              <label className=" font-heading text-[#262626]">Email</label>
              <Input />
            </div>
          </div>

          <div className=" flex flex-col gap-1">
            <label className=" flex items-center gap-2 font-heading text-[#262626]">
              5/5 <Star fill="#F7C32E" color="#F7C32E" />
            </label>
            <Input />
          </div>

          <div className=" flex flex-col gap-1">
            <label className=" font-heading text-[#262626]">Review</label>
            <Textarea />
          </div>

          <div>
            <Button className=" bg-[#0CBC87] px-10 ">Post review</Button>
          </div>
        </form>
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
          <Progress className=" bg-[#F0EADB] h-1 md:h-2" value={item.progress} />
          <div className=" flex items-center gap-1">
            {Array.from({ length: item.fillStarCount }).map((_, index) => (
              <Star key={index} fill="#F7C32E" color="#F7C32E" className=" size-5 " />
            ))}
            {Array.from({ length: item.noFillStarCount }).map((_, index) => (
              <Star key={index} color="#F7C32E" className=" size-5 " />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const StudentReview = () => {
  return (
    <div className=" flex items-start gap-3">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
        alt="Instructor avatar"
        className=" w-[50px] h-[50px]  md:w-[80px] md:h-[80px] rounded-full object-cover"
      />

      <div className=" flex flex-col gap-3 md:gap-5 items-start">
        <div className=" flex flex-col">
          {Array.from({ length: 1 }).map((_, index) => (
            <h1 className=" font-bold text-[16px] font-heading">David</h1>
          ))}
          <h1 className="  md:text-[14px] font-sans">Review on Nov 12,2014</h1>
        </div>

        <p className=" text-justify font-sans md:text-[20px] md:leading-[24px] text-[#525252]">
          The course content is well-organized that makes students easy to
          follow, but there is limited amount of examples and exercises for
          students to learn how to apply the knowledge in real world situation.
        </p>

        <div className=" flex items-center gap-3">
          <button className=" flex  border px-2 py-1 rounded-lg border-[#404040] items-center gap-2">
            <ThumbsUp size={20} color="#404040" />
            <p className="text-[#404040]">23</p>
          </button>

          <button className=" flex  border px-2 py-1 rounded-lg border-[#404040] items-center gap-2">
            <ThumbsDown size={20} color="#404040" />
            <p className="text-[#404040]">12</p>
          </button>
        </div>
      </div>
    </div>
  );
};
