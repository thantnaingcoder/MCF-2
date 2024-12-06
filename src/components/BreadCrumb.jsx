import React from "react";
import { HiChevronRight, HiHome, HiMiniHome } from "react-icons/hi2";
import { LuChevronLeft, LuChevronRight, LuHome } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle, links }) => {
  const navigate = useNavigate();

  return (
    <div className=" w-full flex items-center justify-between gap-3 mb-5  py-2">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex  items-center">
            <Link
              to="/courses"
              className="inline-flex gap-1 items-center text-[16px] font-medium text-[#737373] hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
            >
              {/* <LuHome /> */}
              Course
            </Link>
          </li>

          {links &&
            links.map((link, index) => (
              <li key={index} className="inline-flex  items-center">
                <Link
                  to={link.path}
                  className="inline-flex  gap-1 items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <LuChevronRight />
                  {link.title}
                </Link>
              </li>
            ))}

          <li aria-current="page">
            <div className="flex items-center">
              <HiChevronRight />
              <span className="ms-1 cursor-pointer font-medium text-[16px] text-[#171717] md:ms-2 dark:text-gray-400">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      {/* <div className=" flex items-center">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className=" size-7 flex justify-center items-center text-sm font-medium bg-white border border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-primary-500 dark:focus:text-white"
        >
          <LuChevronLeft />
        </button>
        <button
          type="button"
          onClick={() => navigate(1)}
          className=" size-7 flex justify-center items-center text-sm font-medium bg-white border border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-primary-500 dark:focus:text-white"
        >
          <LuChevronRight />
        </button>
      </div> */}
    </div>
  );
};

export default BreadCrumb;
