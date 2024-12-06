import Student1 from "../../assets/aboutUs/studentFeedback/student-1.png";
import Student2 from "../../assets/aboutUs/studentFeedback/student-2.png";
import Student3 from "../../assets/aboutUs/studentFeedback/student-1.png";
import Student4 from "../../assets/aboutUs/studentFeedback/student-2.png";
import Student5 from "../../assets/aboutUs/studentFeedback/student-5.png";
import PageLayout from "../../features/public/components/PageLayout";
import StudentFeedbacklists from "./StudentFeedbacklists";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const StudentFeedBackContainer = () => {
  const feedbacks = [
    {
      id: 1,
      profile: Student1,
      name: "Nix Maxwell",

      comments:
        "  While online platforms are often cheaper than traditional education, costs for certificates or subscriptions can add up.",
    },
    {
      id: 2,
      profile: Student2,
      name: "Terry",
      comments:
        "Earning a certificate from a recognized institution is a significant advantage for career development.",
    },
    {
      id: 3,
      profile: Student3,
      name: "Rosemary",
      comments:
        " Many courses are seen as academically rigorous, with content provided by top universities.",
    },
    {
      id: 4,
      profile: Student4,
      name: "Taylor",
      comments:
        "The platform is intuitive, making it easy for users of all ages to navigate.",
    },
    {
      id: 5,
      profile: Student5,
      name: "Clerk",
      comments:
        "Users appreciate the integration with LinkedIn, allowing easy showcase of completed courses..- ",
    },
  ];

  return (
    <PageLayout>
      <div className="w-full mb-5">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={90}
          centeredSlides={true}
          slidesPerView={"1"}
          loop
          navigation={{ nextEl: ".nextEl", prevEl: ".prevEl", clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 1 }, // Small screens
            768: { slidesPerView: 2, spaceBetween: 40 }, // Tablets
            1024: { slidesPerView: 3 }, // ipadPro & laptop screens
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index}>
              <StudentFeedbacklists {...feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="prevEl">
          <button className="flex items-center justify-center duration-300 scale-75 rounded-full size-10 bg-neutral-100">
            <LuChevronLeft className="size-6" />
          </button>
        </div>
        <div className="nextEl">
          <button className="flex items-center justify-center duration-300 scale-75 rounded-full size-10 bg-neutral-100">
            <LuChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default StudentFeedBackContainer;
