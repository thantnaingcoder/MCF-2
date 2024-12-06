import { useParams } from "react-router-dom";
import { latestBlog } from "../../feat-blog/constant/latest";
import PageLayout from "../../public/components/PageLayout";
import { events } from "../constant/event";
import {
  LuArrowRight,
  LuBookOpen,
  LuCalendar,
  LuGraduationCap,
  LuUser,
} from "react-icons/lu";
import { Fragment } from "react";

const BlogDetailContentInfo = () => {
  const { slug } = useParams();

  const latestBlogDetail = latestBlog.find((blog) => blog?.slug === slug);
  const eventBlogDetail = events.find((event) => event.slug === slug);
  return (
    <section className="px-5 xl:px-0 pb-32 lg:pb-40  md:mb-20">
      <PageLayout>
        <div className="max-w-3xl">
          <img
            src={(latestBlogDetail || eventBlogDetail)?.image}
            alt="Team collaboration meeting"
            className={`w-full mb-10 rounded-lg object-cover object-center `}
          />
          {/* Author Info */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl  font-bold mb-4 text-neutral-900 font-heading">
              {(latestBlogDetail || eventBlogDetail)?.title}
            </h1>
            <div className="flex md:flex-row flex-col  items-start md:items-center gap-4 text-neutral-600 ">
              <div className="flex items-center gap-2">
                <LuUser className="size-5  " />
                <span className="font-medium ">
                  {(latestBlogDetail || eventBlogDetail)?.author}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <LuGraduationCap className="size-5" />
                </div>
                <span>
                  {(latestBlogDetail || eventBlogDetail)?.specialize} ,
                  {(latestBlogDetail || eventBlogDetail)?.academicName}
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            {(latestBlogDetail || eventBlogDetail)?.description}
          </p>

          {(latestBlogDetail || eventBlogDetail)?.details?.map((detail, i) => (
            <Fragment key={i}>
              <div>
                <h2 className="text-2xl font-bold text-neutral-800 mt-8 mb-4 flex items-center gap-2">
                  {detail.heading}
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  {detail.content}
                </p>
              </div>
            </Fragment>
          ))}

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="text-xl font-bold mb-6 text-neutral-900 flex items-center gap-2">
              <LuBookOpen className="size-5 text-primary-500" />
              Keep Reading
            </h3>
            {(latestBlogDetail || eventBlogDetail)?.keepReading?.map(
              (article, i) => (
                <Fragment key={i}>
                  <div className="">
                    <div className="grid gap-6">
                      <div className="block p-6 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors group">
                        <h4 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {article.title}
                        </h4>
                        <p className="text-neutral-600 flex items-center gap-1">
                          Read more
                          <LuArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </p>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )
            )}
          </div>
        </div>
      </PageLayout>
    </section>
  );
};

export default BlogDetailContentInfo;
