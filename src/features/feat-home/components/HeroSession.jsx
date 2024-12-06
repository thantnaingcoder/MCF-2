import React from "react";
import PageLayout from "../../public/components/PageLayout";
import { Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Img from "./../../../assets/home/heroOther/heroSection.png"
const HeroSession = () => {
  const nav = useNavigate();
  return (
    <div className="relative w-full  h-[200px] md:h-[600px] xl:h-full max-h-[750px] bg-cover bg-center">
      <img src={Img} alt="img" className="w-full h-full absolute object-cover"/>
      <PageLayout>
        <div className=" relative w-full  h-[200px] md:h-[600px]  max-h-[750px] ">
          <div className="  hidden md:flex  container  absolute z-20   flex-col gap-5 w-[650px] h-[346px] md:pt-20  lg:pt-28    ">
            <h1 className=" font-label text-[#FD9035] text-[25px]">
              Your path to knowledge, made simple
            </h1>
            <p className=" font-heading font-bold text-[49px] text-white leading-[56px] ">
              Your Journey to <br /> knowledge starts{" "}
              <p className="inline-block text-primary-600">here</p>
            </p>
            <p className=" text-[#D4D4D4] text-[20px] leading-[26px]">
              Whether you're here to learn something new, enhance your skills,
              or explore your passions, Pathway Academy provides the tools and
              guidance to turn your goals into achieve
            </p>

            <div className="flex items-center ">
              <Link
                to="/about-us"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Learn More
              </Link>

              <Link
                to="/courses"
                className=" bg-white  focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Our Courses
              </Link>
            </div>
          </div>


          <div className=" hidden md:block right-5 bottom-10 rounded-xl bg-white w-[285px] p-3 lg:p-5 absolute z-10">
            <div className=" flex flex-col gap-2">

              <h1 className=" flex items-center gap-1 text-[#171717]">
                <Star fill="#02996f" color="#02996f" /> Trustpilot
              </h1>
              <div className="flex gap-2 ">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <p key={index} className="inline-block bg-primary-600">
                    <Star fill="white" color="#02996f" />
                  </p>
                ))}
                <p className=" text-[#171717] font-bold">4.8/5.0</p>
              </div>
              <p className=" text-[#525252]">Reviewed By 365 users</p>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default HeroSession;
