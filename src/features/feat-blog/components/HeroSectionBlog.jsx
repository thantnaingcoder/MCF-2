import React from "react";
import HeroBlog from "../../../assets/Blog/heroSection.png";
import HeroSection from "../../../components/HeroSection";

const HeroSectionBlog = () => {
  return (
    <section className="mb-10 md:mb-15 lg:mb-20">
      <HeroSection image={HeroBlog} title={"Blog"} />
    </section>
  );
};

export default HeroSectionBlog;
