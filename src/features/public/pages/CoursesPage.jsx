import React from "react";
import { Star, Clock, Heart, BookOpenCheck } from "lucide-react";
import { isNumber } from "lodash";
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
import {  useNavigate } from "react-router-dom";

const CoursesPage = () => {
  const nav= useNavigate()
  const topCourse = [
    {
      id: 1,
      label: "Video Editing",
      image: Course1,
      level: "Beginner",
      lesson: 18,
      header: "Essential Video Editing Techniques",
      slug: "video-editing",
      description:
        "Learn to create engaging videos using industry-leading software. Master transitions, effects, and storytelling through visuals",
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
      slug: "business",
      description:
        "Introduction to business planning and strategic decision-making. Gain practical insights into crafting effective strategies to achieve business success",
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
      slug: "content-writing",
      description:
        "Develop writing skills to craft compelling articles, blogs ,and copy for online audiences. Perfect for aspiring writers and marketers",
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
      slug: "development",
      description:
        "Build responsive and dynamic websites with practical lessons on HTML,CSS,JavaScript, and popular frameworks like React and Node.js",
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
      slug: "language",
      description:
        "Speak confidently in Spanish with an immersive course designed to improve vocabulary, grammar, and communication skills",
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
      slug: "web-design",
      description:
        "Learn to design beautiful ,responsive , and user-friendly websites. Introduction to designing websites with user-friendly layouts.",
      instructor: "Ms.Emma",
      instructorPhoto: Emma,
      price: 25.0,
    },
  ];
  return (
    <div className=" h-auto mb-40">
      <div className="   w-full bg-course-page h-[200px] md:h-[400px] lg:h-[600px] max-h-[750px] bg-cover bg-center flex items-center justify-center">
        <div className="  font-heading text-[32px] md:text-[56px] text-[#ffffff]   font-bold ">
          Courses
        </div>
      </div>

      <PageLayout>
        <div className=" mx-1  my-20">
          {topCourse.map((course, index) => (
            <div key={index} className="   bg-white flex flex-col md:flex-row mb-5 overflow-hidden">
              {/* Card Image Container */}
              <div className="relative">
                <img
                  src={course.image}
                  alt="Video editing workspace"
                  className="w-full md:w-[700px] h-full rounded-tl-lg md:rounded-bl-lg rounded-tr-lg md:rounded-tr-none  object-cover"
                />
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 text-xs font-medium text-white bg-emerald-500 rounded">
                    {course.label}
                  </span>
                </div>
                {/* Like Button */}
              </div>

              {/* Card Content */}
              <div className=" md:rounded-tr-lg rounded-bl-lg md:rounded-bl-none rounded-br-lg px-3 lg:px-10 py-5 w-full flex border-l-2 md:border-l-0 md:border-t-2 border-r-2 border-b-2 flex-col gap-2 md:gap-4">
                <div className=" flex items-center justify-between">
                  <span className="px-2 py-1  text-xs font-medium text-white bg-[#FD7E14] rounded">
                    {course.level}
                  </span>

                  <button className=" rounded-full border p-1 border-gray-200 bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                {/* Course Info */}
                <div className="flex items-center justify-between  ">
                  <div className="flex items-center text-sm md:text-base gap-1">
                    <BookOpenCheck color="#FD9035" className="w-4 h-4 " />
                    {course.lesson} Lesson
                  </div>
                  <div className="flex items-center text-sm md:text-base gap-1">
                    <Clock color="#FD9035" className="w-4 h-4" />
                    2hr 30min
                  </div>
                  <p className=" hidden md:block"></p>
                </div>

                {/* Title */}
                <h3 className=" md:text-[25px] font-heading font-semibold line-clamp-2 text-primary-500  ">
                  {course.header}
                </h3>
                <p className=" md:text-[20px] md:leading-[32px] font-sans text-[#737373]">
                  {course.description}
                </p>

                {/* Rating and Students */}
                <div className="flex items-center justify-between border-b-2 pb-2 ">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#F7C32E] text-[#F7C32E]" />
                    <span className="text-sm md:text-[16px] font-medium">
                      4.5/5.0
                    </span>
                  </div>
                  <span className="text-sm md:text-[16px] text-gray-600">
                    4500 (Students)
                  </span>
                </div>

                {/* Instructor and Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.instructorPhoto}
                      alt="Instructor avatar"
                      className="    md:w-[50px] md:h-[50px] rounded-full object-cover"
                    />
                    <span className="text-sm md:text-[24px] font-medium">
                      {course.instructor}
                    </span>
                  </div>
                  <span className="text-md md:text-[25px] font-bold text-emerald-500">
                    {isNumber(course.price)
                      ? `$${course.price}.00`
                      : course.price}
                  </span>
                </div>
                <div>
                  <button onClick={() => nav(`/courses/course-detail/${course.slug}`)}  className="hidden md:flex text-white  bg-[#0CBC87] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 ">
                    Know Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
};

export default CoursesPage;
