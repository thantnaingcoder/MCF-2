import React from "react";
import FacilityPng from "../../../assets/aboutUs/heroOther/Facilities.png";
import { BadgeCheck } from "lucide-react";
const Facilities = () => {
  return (
    <div className=" my-10 md:my-20">
      <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row gap-5 md:gap-16">
        <div className="w-3/4 flex justify-center h-auto mx-auto md:w-full">
          <img src={FacilityPng} />
        </div>

        <div className=" mx-5 flex flex-col gap-3 md:gap-5 md:my-5">
          <div>
            <h1 className=" font-heading text-[31px]  md:text-[39px] font-bold">
              Our Facilities
            </h1>
            <p className=" font-sans text-[#737373] md:text-[20px]">
              Our platform is designed for learners with busy schedules,
              allowing you to learn whenever it's convenient for you
            </p>
          </div>

          <div className=" space-y-3">
            <div className=" flex items-center gap-2">
              <BadgeCheck color="white" fill="#02996f" />
              <p className=" font-heading text-[#404040] font-bold text-lg md:text-[20px]">
                Interactive Learning Tools
              </p>
            </div>

            <p className=" font-sans text-[#737373] md:text-[20px]">
              Enhance your learning experience with interactive tools ,
              including quizzes,practical exercises,and a discussion forum where
              you can ask questions and engage with peers
            </p>
          </div>

          <div className=" space-y-3">
            <div className=" flex items-center gap-2">
              <BadgeCheck color="white" fill="#02996f" />
              <p className=" font-heading text-[#404040] font-bold text-lg md:text-[20px]">
                Live Support & Guidance
              </p>
            </div>

            <p className=" font-sans text-[#737373] md:text-[20px]">
              Our team is available 24/7 to help with any technical issues or
              course questions, ensuring you have a smooth experience
            </p>
          </div>

          <div className=" space-y-3">
            <div className=" flex items-center gap-2">
              <BadgeCheck color="white" fill="#02996f" />
              <p className=" font-heading text-[#404040] font-bold text-lg md:text-[20px]">
                Mobile-Friendly Learning
              </p>
            </div>

            <p className=" font-sans text-[#737373] md:text-[20px]">
              Take your learning on the go! Our platform is optimized for
              mobile, so you can access your courses wherever you are , on any
              device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
