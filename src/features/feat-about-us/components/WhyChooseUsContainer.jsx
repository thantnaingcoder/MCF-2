import WhyChooseUsLists from "./WhyChooseUsLists";

import Laptop from "../../../assets/aboutUs/otherIcon/laptop-2.svg";
import DollarSign from "../../../assets/aboutUs/otherIcon/circle-dollar-sign.svg";
import OpenBook from "../../../assets/aboutUs/otherIcon/Book.svg";
import GraduationCap from "../../../assets/aboutUs/otherIcon/GraduationCap.svg";

const WhyChooseUsContainer = () => {
  const chooseUs = [
    {
      iconUrl: Laptop,
      title: "Learn from everywhere",
      description: "No boundaries—learn anytime, anywhere.",
    },
    {
      iconUrl: DollarSign,
      title: "Save money",
      description:
        "Maximize your savings, minimize your costs—smart learning starts here.",
    },
    {
      iconUrl: OpenBook,
      title: "Flexible learning",
      description: "Learn at your own pace, on your own terms.",
    },
    {
      iconUrl: GraduationCap,
      title: "Unlimited certificates",
      description: "Earn unlimited certificates, unlock endless opportunities.",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 gap-10 px-4 md:px-20 xl:px-0 md:grid-cols-2 xl:grid-cols-4"
    >
      {chooseUs.map((item, index) => (
        <WhyChooseUsLists key={index} item={item} />
      ))}
    </div>
  );
};

export default WhyChooseUsContainer;
