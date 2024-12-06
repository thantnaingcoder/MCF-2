import FacilitiesLists from "./FacilitiesLists";
import CircleCheck from "../../assets/aboutUs/otherIcon/circle-check.svg";

const FacilitiesContainer = () => {
  const facilities = [
    {
      title: "Interactive Learning Tools",
      description:
        "Enhance your learning experience with interactive tools, including quizzes, practical exercises, and a discussion forum where you can ask questions and engage with peers.",
      iconUrl: CircleCheck,
    },
    {
      title: "Live Support & Guidance",
      description:
        "Our team is available 24/7 to help with any technical issues or course questions, ensuring you have a smooth experience.",
      iconUrl: CircleCheck,
    },
    {
      title: "Mobile-Friendly Learning",
      description:
        "Take your learning on the go! Our platform is optimized for mobile, so you can access your courses wherever you are, on any device.",
      iconUrl: CircleCheck,
    },
  ];
  return (
    <div className="flex flex-col gap-6 md:gap-5">
      {facilities.map((facility, index) => (
        <FacilitiesLists key={index} facility={facility} />
      ))}
    </div>
  );
};

export default FacilitiesContainer;
