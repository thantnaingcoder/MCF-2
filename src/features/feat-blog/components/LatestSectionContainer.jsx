import { latestBlog } from "../../feat-blog/constant/latest";
import LatestSectionList from "./LatestSectionList";
import PageLayout from "../../public/components/PageLayout";

const LatestSectionContainer = () => {
  return (
    <PageLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {latestBlog.map((blog) => (
          <LatestSectionList key={blog.id} blog={blog} />
        ))}
      </div>
    </PageLayout>
  );
};

export default LatestSectionContainer;
