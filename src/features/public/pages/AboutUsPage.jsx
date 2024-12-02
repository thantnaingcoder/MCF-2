import HeroSectionAboutUs from "../../feat-about-us/components/HeroSectionAboutUs";
import WhyChooseUsSection from "../../feat-about-us/components/WhyChooseUsSection";
import EmpoweringSection from "../../feat-about-us/components/EmpoweringSection";
import AchievementSection from "../../feat-about-us/components/AchievementSection";
import InstructorSection from "../../feat-about-us/components/InstructorSection";
import BrandedLogoSection from "../../feat-about-us/components/BrandedLogoSection";
import FacilitiesSection from "../../feat-about-us/components/FacilitiesSection";
import StudentFeedbackSection from "../../feat-about-us/components/StudentFeedbackSection";

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
      <StudentFeedbackSection />
    </div>
  );
};

export default AboutUsPage;
