import React from "react";
import HeroSectionBlog from "../../feat-blog/components/HeroSectionBlog";
import EventSectionBlog from "../../feat-blog/components/EventSectionBlog";
import LastestSectionBlog from "../../feat-blog/components/LastestSectionBlog";

const BlogPage = () => {
  return (
    <div>
      <HeroSectionBlog />
      <EventSectionBlog />
      <LastestSectionBlog />
    </div>
  );
};

export default BlogPage;
