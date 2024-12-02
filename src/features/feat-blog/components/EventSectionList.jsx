import { LuCalendar } from "react-icons/lu";
import { Link } from "react-router-dom";
const EventSectionList = ({ image, title, date, slug }) => {
  return (
    <>
      <Link
        to={`/blog/${slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
      >
        <div className="aspect-[100%] lg:aspect-[16/9] w-full overflow-hidden">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <LuCalendar size={16} className="text-neutral-400" />
            <p>{date}</p>
          </div>
          <h2 className="mt-4 flex-1 text-base md:text-xl font-semibold tracking-tight text-neutral-600 font-heading">
            {title}
          </h2>
          <div className="mt-6">
            <button className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 font-heading ">
              Read article
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default EventSectionList;
