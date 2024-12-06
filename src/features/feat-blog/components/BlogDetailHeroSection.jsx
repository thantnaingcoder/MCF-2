import { useParams } from "react-router-dom";
import { latestBlog } from "../../feat-blog/constant/latest";
import { events } from "../constant/event";

const BlogDetailHeroSection = () => {
  const { slug } = useParams();

  const blogDetail = latestBlog.find((blog) => blog?.slug === slug);
  const eventBlogDetail = events.find((event) => event.slug === slug);

  return (
    <section className="mb-10">
      <div className="h-[430px] lg:h-[427px] bg-primary-50 w-full flex flex-col justify-center items-center sm:px-0 px-5 ">
        <div className="max-w-2xl flex flex-col  ">
          <p className="text-neutral-600 sm:text-base text-sm ">
            {(blogDetail || eventBlogDetail).date}
          </p>
          <h1 className="font-heading font-semibold text-neutral-600 text-base  lg:text-xl leading-6 lg:leading-10 ">
            {(blogDetail || eventBlogDetail).title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHeroSection;
