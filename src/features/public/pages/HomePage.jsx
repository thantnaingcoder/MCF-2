import React from "react";

import PageLayout from "../components/PageLayout";
import TopCourseList from "../../feat-home/components/TopCourseList";
import FacilitiesSection from "../../../components/HomeAndAbout/FacilitiesSection";
import StudentFeedbackSection from "../../../components/HomeAndAbout/StudentFeedbackSection";
import HomeFaq from "../../feat-home/components/HomeFaq";
import MobileScreenHeroSession from "../../feat-home/components/MobileScreenHeroSession";
import HeroSession from "../../feat-home/components/HeroSession";
import TopCourseListSession from "../../feat-home/components/TopCourseListSession";
import EmpoweringSection from "../../../components/HomeAndAbout/EmpoweringSection";
import AchievementSection from "../../../components/HomeAndAbout/AchievementSection";
import BrandedLogoSection from "../../../components/HomeAndAbout/BrandedLogoSection";

const HomePage = () => {
  return (
    <div className="mb-40 ">
      <HeroSession />

      <MobileScreenHeroSession />

      <PageLayout>
        <TopCourseList />

        <EmpoweringSection />

        <AchievementSection />

        <TopCourseListSession />

        <FacilitiesSection />

        <BrandedLogoSection />

        <StudentFeedbackSection className="mb-10 md:mb-15 lg:mb-20" />

        <HomeFaq />
      </PageLayout>
    </div>
  );
};

export default HomePage;
