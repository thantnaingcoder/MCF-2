import Total from "../../../assets/aboutUs/otherIcon/total.svg";
import User from "../../../assets/aboutUs/otherIcon/user.svg";
import Classes from "../../../assets/aboutUs/otherIcon/classes.svg";
import Certified from "../../../assets/aboutUs/otherIcon/certified.svg";
import AchievementLists from "./AchievementLists";
const AchievementContainer = () => {
  const achievement = [
    {
      iconUrl: Total,
      number: "10K +",
      name: "Total Achievements",
    },
    {
      iconUrl: User,
      number: "1600K +",
      name: "Total Students",
    },
    {
      iconUrl: Classes,
      number: "15K +",
      name: "Classes Complement",
    },
    {
      iconUrl: Certified,
      number: "100K +",
      name: "Certified Teachers",
    },
  ];
  return (
    <div className="xl:px-0 px-5 gap-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 ">
      {achievement.map((item, index) => (
        <AchievementLists key={index} item={item} />
      ))}
    </div>
  );
};

export default AchievementContainer;
