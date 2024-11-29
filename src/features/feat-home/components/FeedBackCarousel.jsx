import React from "react";
import studen1 from "./../../../assets/studentFeedback/student1.png";
import studen2 from "./../../../assets/studentFeedback/student2.png";
import studen3 from "./../../../assets/studentFeedback/student3.png";
import { FaStarHalfAlt } from "react-icons/fa";
import { Card, CardContent } from "./../../../components/ui/card.tsx";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./../../../components/ui/carousel.tsx";
const FeedBackCarousel = () => {
  const feedbacks = [
     {
      id:1,
      name:"Lorenzo",
      photo:studen1,
      rate : 5,
      feedback:"Earning a certificate fromm a recognized institution is a significant milestone in your career.",
     },
     {
      id:2,
      name:"Rose",
      photo:studen2,
      rate : 5,
      feedback:"While online platforms are often cheaper than traditional education, costs for certificates or subscriptions can add up.",
     },
     {
      id:3,
      name:"Justin",
      photo:studen3,
      rate : 5,
      feedback:"Many Courses are seen as academically rigorous, with content provided by top universities",
     },
     {
      id:4,
      name:"Lorenzo",
      photo:studen1,
      rate : 5,
      feedback:"Earning a certificate fromm a recognized institution is a significant milestone in your career.",
     },
     {
      id:5,
      name:"Shaun",
      photo:studen2,
      rate : 5,
      feedback:"Earning a certificate fromm a recognized institution is a significant milestone in your career.",
     },
     {
      id:6,
      name:"Lucy",
      photo:studen3,
      rate : 5,
      feedback:"Earning a certificate fromm a recognized institution is a significant milestone in your career.",
     }
  ]
  return (
    <div className=" mt-5 md:mt-10">
      <h1 className=" text-center font-heading text-[26px] font-semibold">
        Some valuable feedback from <br /> our students
      </h1>
      <div className=" my-5 md:my-10 ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent className="">
            {feedbacks.map((feed, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 ">
                  <CardContent className=" bg-[#EFFAF4]  rounded-2xl h-72  flex flex-col justify-center gap-5 items-center  ">
                    <div className=" flex items-center gap-3">
                      <img
                        src={feed.photo}
                        alt="Instructor avatar"
                        className="   rounded-full object-cover"
                      />

                      <div className=" flex flex-col gap-3 items-center">
                        <div className=" flex">
                          {Array.from({ length: 4  }).map((_, index) => (
                            <Star key={index} fill="#F7C32E" color="#F7C32E" />
                            
                          ))}
                           <FaStarHalfAlt size={23} fill="#F7C32E" color="#F7C32E" />
                        </div>
                        <h1 className=" font-bold text-[16px] font-heading">
                          {feed.name}
                        </h1>
                      </div>
                    </div>

                    <p className=" font-sans flex flex-col justify-center text-[20px] leading-[24px] text-center text-[#525252]">
                      {feed.feedback}
                    </p>
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className=" flex justify-center gap-3 md:gap-5 mt-5">
            <CarouselPrevious className=" p-5 bg-[#F5F5F5]" />
            <CarouselNext className=" p-5 bg-[#F5F5F5]" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default FeedBackCarousel;
