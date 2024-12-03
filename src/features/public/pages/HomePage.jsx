import React from "react";
import { Star } from "lucide-react";
import Course1 from "../../../assets/course/CourseList/course1.png";
import Course2 from "../../../assets/course/CourseList/course2.png";
import Course3 from "../../../assets/course/CourseList/course3.png";
import Course4 from "../../../assets/course/CourseList/course4.png";
import Course5 from "../../../assets/course/CourseList/course5.png";
import Course6 from "../../../assets/course/CourseList/course6.png";
import Emma from "../../../assets/course/CourseTeacher/Emma.png";
import Olivia from "../../../assets/course/CourseTeacher/Olivia.png";
import Lucy from "../../../assets/course/CourseTeacher/lucy.png";
import Lucas from "../../../assets/course/CourseTeacher/MsLucas.png";
import Ethan from "../../../assets/course/CourseTeacher/Ethan.png";
import Ella from "../../../assets/course/CourseTeacher/MrElla.png";

import PageLayout from "../components/PageLayout";
import CourseCard from "../../feat-home/components/CourseCard";
import LabelHeading from "../../feat-home/components/LabelHeading";
import EmpowerSession from "../../feat-home/components/EmpowerSession";
import TopCourseList from "../../feat-home/components/TopCourseList";
import UserTrust from "../../feat-home/components/UserTrust";
import Facilities from "../../feat-home/components/Facilities";
import MovingLogo from "../../feat-home/components/MovingLogo";
import FeedBackCarousel from "../../feat-home/components/FeedBackCarousel";
import HomeFaq from "../../feat-home/components/HomeFaq";

const HomePage = () => {
  const topCourse = [
    {
      id: 1,
      label: "Video Editing",
      image: Course1,
      level: "Beginner",
      lesson: 18,
      header: "Essential Video Editing Techniques",
      instructor: "Ms.Ella",
      instructorPhoto: Ella,
      price: 12.0,
    },
    {
      id: 2,
      label: "Business",
      image: Course2,
      level: "Advanced",
      lesson: 20,
      header: "Fundamentals of Business Strategy",
      instructor: "Olivia",
      instructorPhoto: Olivia,
      price: "free",
    },
    {
      id: 3,
      label: "Content Writing",
      image: Course3,
      level: "Intermediate",
      lesson: 15,
      header: "Content writing Essential",
      instructor: "Lucy",
      instructorPhoto: Lucy,
      price: 15.0,
    },
    {
      id: 4,
      label: "Development",
      image: Course4,
      level: "Beginner",
      lesson: 40,
      header: "Fullstack web development",
      instructor: "Ms.Lucas",
      instructorPhoto: Lucas,
      price: 20.0,
    },
    {
      id: 5,
      label: "Language",
      image: Course5,
      level: "Beginner",
      lesson: 30,
      header: "Mastering Conversational Language",
      instructor: "Mr.Ethan",
      instructorPhoto: Ethan,
      price: 12.0,
    },
    {
      id: 6,
      label: "Web Design",
      image: Course6,
      level: "Beginner",
      lesson: 26,
      header: "Basic Of Web Design",
      instructor: "Ms.Emma",
      instructorPhoto: Emma,
      price: 25.0,
    },
  ];

  return (
    <div className="  mb-40">
      <div className=" relative w-full bg-home-page h-[200px] md:h-[600px] max-h-[750px] bg-cover bg-center">
      <PageLayout>
      <div className=" relative w-full  h-[200px] md:h-[600px] max-h-[750px] ">
        <div className="  hidden md:flex  container  absolute z-20   flex-col gap-5 w-[650px] h-[346px] md:pt-20  lg:pt-28    ">
          <h1 className=" font-label text-[#FD9035] text-[25px]">
            Your path to knowledge, made simple
          </h1>
          <p className=" font-heading font-bold text-[49px] text-white leading-[56px] ">
            Your Journey to <br /> knowledge starts{" "}
            <p className=" inline-block text-primary-600">here</p>
          </p>
          <p className=" text-[#D4D4D4] text-[20px] leading-[26px]">
            Whether you're here to learn something new, enhance your skills, or
            explore your passions, Pathway Academy provides the tools and
            guidance to turn your goals into achieve
          </p>

          <div className=" flex items-center">
            <button
              to="signup"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Learn More
            </button>

            <button
              to="signup"
              className=" bg-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className=" hidden md:block right-5 bottom-5 rounded-xl bg-white w-[285px] p-3 lg:p-5 absolute z-10">
          <div className=" flex flex-col gap-2">
            <h1 className=" flex items-center gap-1 text-[#171717]">
              <Star fill="#02996f" color="#02996f" /> Trustpilot
            </h1>
            <div className=" flex gap-2">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <p key={index} className=" bg-primary-600 inline-block">
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
      
      {/* ...................................mobile screen hero session.................................... */}
      <div className=" md:hidden   container max-w-full bg-primary-50 p-5   z-20   flex-col gap-5     ">
        <h1 className=" font-label text-[#FD9035] text-[15px]">
          Your path to knowledge, made simple
        </h1>
        <p className=" font-heading font-bold text-[30px] text-[#110808] leading-[51px] ">
          Your Journey to <br /> knowledge starts{" "}
          <p className=" inline-block text-primary-600">here</p>
        </p>
        <p className=" mb-5 text-[#110808] text-[15px] leading-[26px]">
          Whether you're here to learn something new, enhance your skills, or
          explore your passions, Pathway Academy provides the tools and guidance
          to turn your goals into achieve
        </p>

        <div className=" flex items-center">
          <button
            to="signup"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Learn More
          </button>

          <button
            to="signup"
            className=" bg-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Learn More
          </button>
        </div>
      </div>

      <PageLayout>
        {/*top list courses*/}
        <TopCourseList />

        {/* Empower session */}
        <EmpowerSession />

        {/*user trust */}

        <UserTrust />

        <div className=" mt-10 md:mt-20">
          <LabelHeading
            label="Discover News"
            heading="Our Top Listed courses"
          />

          {/* course card */}

          <div className=" px-1 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 md:gap-y-10 gap-y-5">
            {topCourse.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        <Facilities />

        <MovingLogo />

        <FeedBackCarousel />

        <HomeFaq />
      </PageLayout>
    </div>
  );
};

export default HomePage;
