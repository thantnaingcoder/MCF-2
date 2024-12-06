import React from "react";

import PageLayout from "../components/PageLayout";

import EmpowerSession from "../../feat-home/components/EmpowerSession";
import TopCourseList from "../../feat-home/components/TopCourseList";
import UserTrust from "../../feat-home/components/UserTrust";
import Facilities from "../../feat-home/components/Facilities";
import MovingLogo from "../../feat-home/components/MovingLogo";
import FeedBackCarousel from "../../feat-home/components/FeedBackCarousel";
import HomeFaq from "../../feat-home/components/HomeFaq";
import MobileScreenHeroSession from "../../feat-home/components/MobileScreenHeroSession";
import HeroSession from "../../feat-home/components/HeroSession";
import TopCourseListSession from "../../feat-home/components/TopCourseListSession";

const HomePage = () => {
  return (
    <div className="  mb-40">
      <HeroSession />

      <MobileScreenHeroSession />

      <PageLayout>
        <TopCourseList />

        <EmpowerSession />

        <UserTrust />

        <TopCourseListSession />

        <Facilities />

        <MovingLogo />

        <FeedBackCarousel />

        <HomeFaq />
      </PageLayout>
    </div>
  );
};

export default HomePage;
