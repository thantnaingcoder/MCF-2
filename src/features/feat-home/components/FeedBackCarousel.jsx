import React from "react";
import studen1 from "./../../../assets/studentFeedback/student1.png";
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 ">
                  <CardContent className=" bg-[#EFFAF4]  rounded-2xl aspect-square flex flex-col justify-center gap-5 items-center  ">
                    <div className=" flex items-center gap-3">
                      <img
                        src={studen1}
                        alt="Instructor avatar"
                        className="   rounded-full object-cover"
                      />

                      <div className=" flex flex-col gap-3 items-center">
                        <div className=" flex">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} fill="#F7C32E" color="#F7C32E" />
                          ))}
                        </div>
                        <h1 className=" font-bold text-[16px] font-heading">
                          Mr Hossain
                        </h1>
                      </div>
                    </div>

                    <p className=" font-sans flex flex-col justify-center text-[20px] leading-[24px] text-center text-[#525252]">
                      Earning a certificate fromm a recognized institution is a
                      significant milestone in your career.
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
