import React from "react";
import { Star, Clock, Heart, BookOpenCheck } from "lucide-react";

import { isNumber } from "lodash";
import { useNavigate } from "react-router-dom";
const CourseCard = ({ course }) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(`/courses/course-detail/${course.slug}`)}
      className=" rounded-lg bg-white overflow-hidden"
    >
      {/* Card Image Container */}
      <div className="relative">
        <img
          src={course.image}
          alt="Video editing workspace"
          className="w-full md:h-72 object-cover"
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
      <div className=" px-1 py-2 md:p-3 flex border-l-2 border-r-2 border-b-2 flex-col gap-2 md:gap-4">
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
        </div>

        {/* Title */}
        <h3 className=" md:text-[25px] font-heading font-semibold line-clamp-2 text-primary-500 h-12 md:h-20 ">
          {course.header}
        </h3>

        {/* Rating and Students */}
        <div className="flex items-center justify-between border-b-2 pb-2 ">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#F7C32E] text-[#F7C32E]" />
            <span className="text-sm md:text-[16px] font-medium">4.5/5.0</span>
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
              className=" w-[30px] h-[30px]   md:w-[50px] md:h-[50px] rounded-full object-cover"
            />
            <span className="text-sm md:text-[24px] font-medium">
              {course.instructor}
            </span>
          </div>
          <span className="text-md md:text-[25px] font-bold text-emerald-500">
            {isNumber(course.price) ? `$${course.price}.00` : course.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
