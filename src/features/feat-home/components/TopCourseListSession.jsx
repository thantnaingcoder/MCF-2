import React from "react";
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

import CourseCard from "../../feat-home/components/CourseCard";
import LabelHeading from "../../feat-home/components/LabelHeading";

const TopCourseListSession = () => {
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
    <div className=" mt-10 md:mt-20">
      <LabelHeading label="Discover News" heading="Our Top Listed courses" />

      <div className=" px-1 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 md:gap-y-10 gap-y-5">
        {topCourse.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default TopCourseListSession;
