import { BadgeCheck } from "lucide-react";
import React from "react";

const OverView = () => {
  return (
    <div className=" flex flex-col px-3 md:px-5 gap-5 md:gap-10">
      <div className=" flex flex-col gap-5">
        <h1 className=" font-heading text-[#171717] text-[20px] md:text-[31px] font-bold">
          Course Description
        </h1>
        <div>
          <h1 className=" text-[20px] font-sans text-[#404040] mb-3">
            Welcome to the <b>Getting start with Javascript course</b> (Over 36
            hours of content)
          </h1>
          <p className="md:leading-[32px] md:text-[20px] text-justify font-sans text-[#525252]">
            Pathway Academy offers a wide range of courses designed to help
            individuals unlock their full potential. Whether you're looking to
            learn new skills, enhance your expertise, or explore new passions,
            our expert instructors provide the knowledge, support, and resources
            to help you succeed. With flexible, engaging content and a focus on
            practical application, our courses are tailored to guide you on your
            personal and professional journey. Start your path to success today
            with Pathway Academy!
          </p>
        </div>
      </div>

      <div>
        <h1 className=" font-heading  mb-3 text-[#171717] text-[20px] md:text-[31px] font-bold">
          What you will learn
        </h1>

        <div className=" flex flex-col gap-3">
          {[
            "Extensive, informative and interesting video lecture",
            "Complete Code demonstrated in lecture",
            "Lab Exercises",
            "All Powerpoint Demonstrations Used in Course",
            "Instructor contact Email for questions and clarifications",
            "Coverage of all important primary Javascript concepts",
          ].map((item, index) => (
            <div key={index} className=" flex items-center gap-1 md:gap-2">
              <BadgeCheck
                color="white"
                className=" size-5 md:size-8"
                fill="#02996f"
              />
              <p className=" font-heading text-[#262626] text-sm  md:text-[20px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className=" font-heading  mb-3 text-[#171717] text-[20px] md:text-[31px] font-bold">
          Skill you will gain
        </h1>

        <div className=" flex-grow flex flex-wrap gap-5">
          {[
            "Web Development",
            "Problem-Solving",
            "Asynchronous Programming",
            "Programming Paradigms",
            "Frameworks/Libraries",
            "Version Control",
          ].map((item, index) => (
            <div key={index}>
              <button className=" px-2 py-1 bg-[#F0F9F9] text-nowrap font-heading text-[#262626]   md:text-[20px]">
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;
