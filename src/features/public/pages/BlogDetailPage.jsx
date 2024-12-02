import React, { useEffect } from "react";
import BlogDetailHeroSection from "../../feat-blog/components/BlogDetailHeroSection";
import BlogDetailContentInfo from "../../feat-blog/components/BlogDetailContentInfo";

const BlogDetailPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BlogDetailHeroSection />
      <BlogDetailContentInfo />
    </div>
  );
};

export default BlogDetailPage;
