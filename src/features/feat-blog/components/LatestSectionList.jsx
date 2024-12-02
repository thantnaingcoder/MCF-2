import { Link } from "react-router-dom";

const LatestSectionList = ({
  blog: { title, slug, image, description, author, date },
}) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="pb-5 sm:pb-10 flex flex-col group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="sm:px-6 py-6 px-4 ">
        <h2 className="mb-2 text-base font-semibold md:text-xl xl:text-2xl font-heading text-neutral-700 ">
          {title}
        </h2>
        <p className="mb-4  text-neutral-500 ">
          {description.length > 300
            ? description.substring(0, 300)
            : description}
        </p>
      </div>
      <div className="px-6 mt-auto flex items-center justify-between">
        <span className=" font-medium text-neutral-700 text-lg text-nowrap sm:text-xl">
          {author}
        </span>
        <span className="text-sm text-neutral-500 ">{date}</span>
      </div>
    </Link>
  );
};

export default LatestSectionList;
