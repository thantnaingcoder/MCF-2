import React from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../../../components/BreadCrumb";
import PageLayout from "../components/PageLayout";
import DetailVideo from "../../../assets/courseDetail.mp4";
import {
  Signal,
  GraduationCap,
  Star,
  Globe,
  Heart,
  BookOpenCheck,
  Clock,
} from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./../../../components/ui/carousel.tsx";
import OverView from "../../feat-home/components/CourseDetailTab/OverView";
import Curriculum from "../../feat-home/components/CourseDetailTab/Curriculum";
import Instructor from "../../feat-home/components/CourseDetailTab/Instructor";
import Reviews from "../../feat-home/components/CourseDetailTab/Reviews";
import FAQs from "../../feat-home/components/CourseDetailTab/FAQs";
import CourseCard from "../../feat-home/components/CourseCard";
import { CardContent } from "../../../components/ui/card.tsx";
const CoursesDetailPage = () => {
  const { slug } = useParams();
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
  ];

  return (
    <div className=" mb-20">
      <div className="bg-[#EFFAF4] ">
        <div className=" py-10">
          <PageLayout>
            <div className=" px-3 md:px-5">
              <BreadCrumb currentPageTitle={slug} />
            </div>

            <div className=" flex flex-col gap-5 px-3 md:px-5">
              <h1 className=" font-heading font-semibold text-[#171717] text-[20px] md:text-[39px]">
                Java Programming for Beginner
              </h1>
              <p className=" text-[16px] md:text-[20px] text-[#404040] font-sans">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>

              <div className=" flex items-center gap-1 md:gap-5 ]">
                <div className=" flex items-center gap-1 md:gap-2">
                  <Signal color="#FD7E14" className=" size-4 md:size-6" />
                  <p className="text-sm md:text-[16px] text-[#262626]">
                    Beginner
                  </p>
                </div>
                <div className=" flex items-center gap-1 md:gap-2">
                  <GraduationCap
                    color="#FD7E14"
                    className=" size-4 md:size-6"
                  />
                  <p className="text-sm md:text-[16px] text-[#262626]">
                    1200 Enrolled
                  </p>
                </div>
                <div className=" flex items-center gap-1 md:gap-2">
                  <Star
                    fill="#FD7E14"
                    color="#FD7E14"
                    className=" size-4 md:size-6"
                  />
                  <p className="text-sm md:text-[16px] text-[#262626]">
                    4.5/5.0
                  </p>
                </div>
                <div className=" flex items-center gap-1 md:gap-2">
                  <Globe color="#FD7E14" className=" size-4 md:size-6" />
                  <p className="text-sm md:text-[16px] text-[#262626]">
                    English
                  </p>
                </div>
              </div>
            </div>
          </PageLayout>
        </div>
      </div>

      {/*...................... course detail............  */}
      <PageLayout>
        <div className=" flex flex-col">
          <div className="   md:mt-20 mx-2 flex flex-col  md:flex-row">
            <div className="w-auto md:w-[65%]   ">
              <Tabs defaultValue="Overview" className="w-full ">
                <TabsList className="w-full bg-white gap-y-3 md:gap-y-0 grid grid-cols-3 md:grid-cols-5 my-10 md:my-0 ">
                  {[
                    "Overview",
                    "Curriculum",
                    "Instructor",
                    "Reviews",
                    "FAQs",
                  ].map((item, index) => (
                    <TabsTrigger key={index} value={item} className="w-full ">
                      {item}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent
                  value="Overview"
                  className="w-full  md:pr-10 py-10"
                >
                  <OverView />
                </TabsContent>
                <TabsContent
                  value="Curriculum"
                  className="w-full  md:pr-10 py-10"
                >
                  <Curriculum />
                </TabsContent>
                <TabsContent
                  value="Instructor"
                  className="w-full  md:pr-10 py-10"
                >
                  <Instructor />
                </TabsContent>
                <TabsContent value="Reviews" className="w-full  md:pr-10 py-10">
                  <Reviews />
                </TabsContent>
                <TabsContent value="FAQs" className="w-full  md:pr-10 py-10">
                  <FAQs />
                </TabsContent>
              </Tabs>
            </div>

            <div className="md:sticky  top-20  w-auto md:w-[35%]  flex flex-col gap-5 md:gap-10  ">
              {/* video session */}
              <div className="  bg-white overflow-hidden">
                <video
                  src={DetailVideo}
                  autoPlay
                  muted
                  loop
                  controls
                  alt="Video editing workspace"
                  className="w-full  border-l-2 rounded-tl-lg rounded-tr-lg  border-r-2 border-t-2 border-gray-200  object-cover"
                />

                {/* Card Content */}
                <div className=" px-1 md:px-2 lg:px-5 flex flex-col rounded-bl-lg rounded-br-lg md:gap-2 lg:gap-5 py-2 lg:py-5  border-b-2 border-l-2 border-r-2 border-gray-200">
                  <div className=" flex items-center justify-between">
                    <div className="flex flex-row gap-8 items-center">
                      <div className="flex flex-row gap-3 items-center">
                        <p className="text-md md:text-[25px] font-bold text-[#0CBC87]">
                          $18.00
                        </p>

                        <p className="text-md md:text-[16px] line-through text-[#0CBC87]">
                          $20.00
                        </p>
                      </div>

                      <span className="px-3 py-1 inline-flex text-xs font-medium text-white bg-[#FD7E14] rounded">
                        10%off
                      </span>
                    </div>

                    <button className=" rounded-full border p-1 border-gray-200 bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  <div className=" flex items-center justify-between">
                    <button className=" border border-[#0CBC87]     focus:ring-4 focus:ring-primary-300 font-medium rounded-sm text-sm px-4 lg:px-5 py-1 lg:py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                      Try for free
                    </button>

                    <Link to="/applyform" className=" border bg-[#0CBC87]  text-white    focus:ring-4 focus:ring-primary-300 font-medium rounded-sm text-sm px-4 lg:px-5 py-1 lg:py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                      Apply now
                    </Link>
                  </div>
                </div>
              </div>
              {/* course include session */}
              <div className=" border-2 border-gray-200 px-1 lg:px-3 rounded-lg md:py-2">
                <h1 className=" text-center md:text-start text-[24px] font-heading font-semibold">
                  This course includes
                </h1>

                <div className="my-5 flex flex-col gap-3 lg:gap-5">
                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-2">
                      <BookOpenCheck color="#FD7E14" />
                      <p className="font-[16px] text-[#262626]">Lesson</p>
                    </div>
                    <p>18</p>
                  </div>

                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-2">
                      <Clock color="#FD7E14" />
                      <p className="font-[16px] text-[#262626]">Duration</p>
                    </div>
                    <p>2hr 30min</p>
                  </div>

                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-2">
                      <Signal color="#FD7E14" />
                      <p className="font-[16px] text-[#262626]">Level</p>
                    </div>
                    <p>Beginner</p>
                  </div>

                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-2">
                      <Globe color="#FD7E14" />
                      <p className="font-[16px] text-[#262626]">Language</p>
                    </div>
                    <p>English</p>
                  </div>

                  <div className=" flex justify-between">
                    <div className=" flex items-center gap-2">
                      <GraduationCap fill="#FD7E14" color="#FD7E14" />
                      <p className="font-[16px] text-[#262626]">Certificate</p>
                    </div>
                    <p>Yes</p>
                  </div>
                </div>
              </div>

              {/* Popular tags  */}
              <div className=" border-2 border-gray-200 lg:px-3 rounded-lg py-2">
                <h1 className="  text-center md:text-start text-[24px] font-heading font-semibold">
                  Popular Tags
                </h1>

                <div className="my-2 lg:my-5  md:px-5 flex-grow flex flex-wrap gap-1 lg:gap-3">
                  {[
                    "Business",
                    "Web development",
                    "Data science",
                    "Machine learning",
                    "Python",
                    "Html",
                    "CSS",
                  ].map((tag, index) => (
                    <button
                      key={index}
                      className=" border-2 border-gray-200 text-[16px] text-[#404040] font-sans     focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-1 lg:py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className=" my-10 mx-1 flex flex-col">
            <div>
              <h1 className=" text-center md:text-start md:ms-5 font-heading mb-4 text-[#171717] text-[20px] md:text-[31px] font-bold">
                Top listed courses
              </h1>
            </div>

            <div className=" my-5 md:my-10 ">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full "
              >
                <CarouselContent className=" w-full">
                  {topCourse.map((course, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <CourseCard course={course} />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className=" lg:hidden flex justify-center gap-3 md:gap-5 mt-5">
                  <CarouselPrevious className=" p-5 bg-[#F5F5F5]" />
                  <CarouselNext className=" p-5 bg-[#F5F5F5]" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default CoursesDetailPage;
