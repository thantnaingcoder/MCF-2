import React from "react";
import LabelHeading from "./LabelHeading";
import {
  Star,
  ChartColumn,
  Video,
  SquarePen,
  Building,
  Globe,
  CodeXml,
  Figma,
  Camera,
  FigmaIcon,
  BadgeCheck,
  ChartLine,
  Users,
  School,
  GraduationCap,
  Clock,
  Heart,
  BookOpenCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const TopCourseList = () => {
  const nav = useNavigate();
  const courses = [
    {
      id: 1,
      title: "Digital Marketing",
      icon: <ChartColumn color="#02996f" size={40} />,
      total: 5,
    },
    {
      id: 2,
      title: "Content Writing",
      icon: <SquarePen color="#02996f" size={40} />,
      total: 5,
    },
    {
      id: 3,
      title: "Development",
      icon: <CodeXml color="#02996f" size={40} />,
      total: 5,
    },
    {
      id: 4,
      title: "Photography",
      icon: <Camera color="#02996f" size={40} />,
      total: 5,
    },
    {
      id: 5,
      title: "Web Design",
      icon: <Figma color="#02996f" size={40} />,
      total: 5,
    },
    {
      id: 6,
      title: "Video Editor",
      icon: <Video color="#02996f" size={40} />,
      total: 10,
    },
    {
      id: 7,
      title: "Business",
      icon: <Building color="#02996f" size={40} />,
      total: 15,
    },
    {
      id: 8,
      title: "Language",
      icon: <Globe color="#02996f" size={40} />,
      total: 5,
    },
  ];

  return (
    <div className="pb-10 mt-10 md:pb-10 xl:pb-16">
      <LabelHeading label="Categories" heading="Our Course Categories" />

      {/* ..................... mobile screen course view ........... */}
      <div className="grid grid-cols-2 gap-2 mx-3 my-5 sm:hidden md:my-10 ">
        <div className="flex items-center gap-2 ">
          <ChartColumn color="#02996f" size={30} />
          <div>
            <h1 className=" font-heading text-[16px] font-semibold">
              Digital Marketing
            </h1>
            <p>5 course</p>
          </div>
        </div>

        <div className="flex items-center gap-2 ">
          <Video color="#02996f" size={30} />
          <div>
            <h1 className=" font-heading text-[16px] font-semibold">
              Video Editing
            </h1>
            <p>6 course</p>
          </div>
        </div>
      </div>
      {/* ..................... mobile screen course view ........... */}

      <div className="grid justify-center gap-2  sm:grid-cols-2 lg:grid-cols-4 gap-y-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 border-2 rounded-md shadow-md  md:p-5"
          >
            {course.icon}
            <div>
              <h1 className=" font-heading text-[24px] text-nowrap font-semibold">
                {course.title}
              </h1>
              <p>{course.total} course</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-5  md:my-10">
        <Link
          to="/courses"
          className="text-white   bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          See All Courses
        </Link>
      </div>
    </div>
  );
};

export default TopCourseList;
