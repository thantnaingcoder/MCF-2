import React from "react";
import Vector from "../../../assets/aboutUs/heroOther/Vector.png";
import { BadgeCheck } from "lucide-react";
import EmpowerPng from "../../../assets/aboutUs/heroOther/empowering.png";
const EmpowerSession = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 mt-20 mb-10 md:my-28">
      <div className=" lg:relative container max-w-full">
        <img
          src={EmpowerPng}
          className=" w-4/5 sm:w-3/5 md:w-auto mx-auto lg:absolute z-20 "
        />
        <img
          src={Vector}
          className=" hidden lg:block md:absolute z-10 -top-20 -right-7 "
        />
      </div>

      <div className=" container flex flex-col gap-4 justify-center px-5 py-5">
        <h1 className=" text-[25px] font-label text-[#FD9035]">Welcome</h1>
        <h1 className=" text-[25px] md:text-[39px] leading-[39px] md:leading-[50px] text-[#171717] font-heading font-semibold">
          Empowering Your Journey to <br /> Success
        </h1>
        <p className=" text-[20px] text-[#737373]">
          "Our Platform offers expertly crafted courses, personallized learning
          paths, and round-the-clock support to help you achieve your goals
          faster"
        </p>
        <div className=" flex items-center gap-2">
          <BadgeCheck color="white" fill="#02996f" />
          <p className=" text-[#404040] text-[16px]">
            Access to exclusive webinars and workshops
          </p>
        </div>
        <div className=" flex items-center gap-2">
          <BadgeCheck color="white" fill="#02996f" />
          <p className=" text-[#404040] text-[16px]">
            90% of students report skill improvement
          </p>
        </div>
        <div className=" flex items-center gap-2">
          <BadgeCheck color="white" fill="#02996f" />
          <p className=" text-[#404040] text-[16px]">
            Courses aligned with industry standards
          </p>
        </div>

        <div>
          <button className="text-white   bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmpowerSession;
