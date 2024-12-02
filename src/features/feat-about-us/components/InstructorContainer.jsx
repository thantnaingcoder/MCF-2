import { LuFacebook, LuInstagram, LuLinkedin, LuX } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import Instructor1 from "../../../assets/aboutUs/instructor/instructor-1.png";
import Instructor2 from "../../../assets/aboutUs/instructor/instructor-2.png";
import Instructor3 from "../../../assets/aboutUs/instructor/instructor-3.png";
import Instructor4 from "../../../assets/aboutUs/instructor/instructor-4.png";
import Facebook from "../../../assets/aboutUs/instructor/facebook.png";
import Instagram from "../../../assets/aboutUs/instructor/instagram.png";
import LinkedIn from "../../../assets/aboutUs/instructor/linkedIn.png";
import TwitterX from "../../../assets/aboutUs/instructor/twitter.png";

import InstructorList from "./InstructorList";
import PageLayout from "../../public/components/PageLayout";

const InstructorContainer = () => {
  const instructors = [
    {
      id: 1,
      name: "Johna Than Doe",
      imageUrl: Instructor1,
      description:
        "Perceived end knowledge certainly day sweetness why cordially ...",
      specialized: "Art & Design",
      icons: [Facebook, Instagram, LinkedIn, TwitterX],
      role: "Professor at Sigma College",
      rating: 4.3,
    },
    {
      id: 2,
      name: "James Carter",
      imageUrl: Instructor2,
      description:
        "Perceived end knowledge certainly day sweetness why cordially ...",
      specialized: "Art & Design",
      icons: [Facebook, Instagram, LinkedIn, TwitterX],

      role: "Professor at Sigma College",
      rating: 4.3,
    },
    {
      id: 3,
      name: "Ryan Walker",
      imageUrl: Instructor3,
      description:
        "Perceived end knowledge certainly day sweetness why cordially ...",
      specialized: "Art & Design",
      icons: [Facebook, Instagram, LinkedIn, TwitterX],

      role: "Professor at Sigma College",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Ethan Bennett",
      imageUrl: Instructor4,
      description:
        "Perceived end knowledge certainly day sweetness why cordially ...",
      specialized: "Art & Design",
      icons: [Facebook, Instagram, LinkedIn, TwitterX],

      role: "Professor at Sigma College",
      rating: 4.3,
    },
  ];

  return (
    <PageLayout>
      <div className="px-5 lg:px-0 max-w-full overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 min-w-full">
            {instructors.map((instructor) => (
              <InstructorList key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default InstructorContainer;
