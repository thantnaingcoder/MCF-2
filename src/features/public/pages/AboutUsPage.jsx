import HeroSectionAboutUs from "../../feat-about-us/components/HeroSectionAboutUs";
import WhyChooseUsSection from "../../feat-about-us/components/WhyChooseUsSection";
import InstructorSection from "../../feat-about-us/components/InstructorSection";
import BrandedLogoSection from "../../../components/HomeAndAbout/BrandedLogoSection";
import FacilitiesSection from "../../../components/HomeAndAbout/FacilitiesSection";
import StudentFeedbackSection from "../../../components/HomeAndAbout/StudentFeedbackSection";
import EmpoweringSection from "../../../components/HomeAndAbout/EmpoweringSection";
import AchievementSection from "../../../components/HomeAndAbout/AchievementSection";

const AboutUsPage = () => {
  return (
    <div>
      <HeroSectionAboutUs />
      <WhyChooseUsSection />
      <EmpoweringSection />
      <AchievementSection />
      <InstructorSection />
      <BrandedLogoSection />
      <FacilitiesSection />
      <StudentFeedbackSection className="px-5 pb-20 mb-10 md:mb-15 lg:mb-20 md:px-0 md:pb-40" />
    </div>
  );
};

export default AboutUsPage;
