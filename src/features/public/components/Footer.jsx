import Logo from "../../../components/Logo";
import androidapp from "../../../assets/footerPhotos/google-play.png";
import iosapp from "../../../assets/footerPhotos/ios-app.png";
import footericon from "../../../assets/footerPhotos/Vector 69.png";
import {
  LuClock,
  LuExternalLink,
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuMapPin,
  LuPhone,
  LuYoutube,
} from "react-icons/lu";

import { BsTwitterX } from "react-icons/bs";

import { LucideMail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto bg-neutral-700 ">
      {/* Newsletter Section */}

      <div className="px-5 py-6 mx-5 -translate-y-24 rounded-lg bg-primary-500 max-w-7xl xl:mx-auto md:py-16 md:px-8 md:-translate-y-36">
        <div className="relative flex items-center justify-end align-top lg:justify-center ">
          <img
            src={footericon}
            alt="icon"
            className="absolute bottom-0 hidden md:block w-28"
          />
        </div>

        <div className="flex flex-col items-start lg:justify-between lg:flex-row">
          <form className="w-full mb-6 md:w-2/3 lg:mb-0">
            <h1 className="mb-4 text-xl font-bold leading-8 text-white font-heading md:text-3xl">
              Join Our Newsletter
            </h1>
            <div className="relative">
              <input
                type="email"
                id="newsletter-email"
                className="block w-full p-4 pr-32 text-sm text-gray-900 border border-gray-300 rounded-lg lg:w-3/4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="absolute px-1.5 sm:px-4  py-2 text-[10px] sm:text-xs text-white bg-black rounded-lg lg:text-sm top-3 lg:top-2 lg:right-40 font-heading right-2 "
              >
                Subscribe Now
              </button>
            </div>
          </form>
          <div className="flex flex-col items-start justify-start w-full lg:items-end lg:justify-center md:w-2/3">
            <h1 className="mb-3 text-xl font-bold text-white font-heading">
              Contact Us
            </h1>
            <ul className="flex flex-col items-start space-y-2 lg:items-end ">
              <li className="flex items-center justify-center gap-2 text-white lg:justify-end">
                <LuPhone className="text-white size-4" />
                <span>Call on: 0786 778 375 028</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-white ">
                <LuClock className="text-white size-4" />
                Time: 9am to 5pm (Sunday close)
              </li>
              <li className="flex items-center justify-center gap-2 text-white lg:justify-end">
                <LuMapPin className="text-white size-4" />
                789 Pine Drive, Apt 3B
              </li>
              <li className="flex items-center justify-center gap-2 text-white lg:justify-end">
                <LucideMail className="text-white size-4" />
                Pathway67@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}

      <div className="px-5 mx-auto mb-5 -mt-16 sm:-mt-20 md:-mt-28 max-w-7xl xl:px-0">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* About Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-1">
            <Link to="/" className="flex mb-8 md:mb-5">
              <Logo className="w-24 h-14" />
            </Link>
            <p className=" text-neutral-300">
              Pathway Academy provides the tools and guidance to turn your goals
              into achievements.
            </p>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold font-heading text-neutral-50">
              Our Services
            </h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <a href="#" className=" hover:underline">
                  Business Strategy
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Content Writing
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  Language
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-bold font-heading text-neutral-50 ">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-neutral-300 ">
              <Link to="/about-us">
                <li className=" hover:underline">About Us</li>
              </Link>
              <Link to="/contact-us">
                <li className=" hover:underline">Contact Us</li>
              </Link>
              <Link to="/blog">
                <li className=" hover:underline">Blog</li>
              </Link>
              <Link to="/signup">
                <li className=" hover:underline">Sign Up Student</li>
              </Link>
              <Link to="#">
                <li className=" hover:underline">Sign Up Instructor</li>
              </Link>
            </ul>
          </div>
          {/* Community */}
          <div className="col-span-1 ">
            <h3 className="mb-4 text-lg font-bold font-heading text-neutral-50">
              Community
            </h3>
            <ul className="flex flex-col gap-2 text-sm sm:text-base text-neutral-300">
              <Link to="/support">
                <li className="flex items-center gap-1 hover:underline">
                  <div className="flex items-center gap-1">
                    <span>Supports</span>
                    <LuExternalLink />
                  </div>
                </li>
              </Link>
              <Link to="faq">
                <li className="hover:underline"> Faqs </li>
              </Link>
              <Link to="privacy-policy">
                <li className="hover:underline"> Privacy policy </li>
              </Link>
              <Link to="termsandcondition">
                <li className="hover:underline"> Terms & condition </li>
              </Link>
            </ul>
          </div>
          {/* Social Links */}

          <div className="col-span-1 ">
            <div className="flex flex-col gap-2 mb-4">
              <h3 className="mb-2 text-lg font-bold text-nowrap font-heading text-neutral-50">
                App Available
              </h3>
              <div className="flex gap-2">
                <img
                  src={androidapp}
                  className="w-16 h-auto sm:w-24"
                  alt="Android Store"
                />
                <img
                  src={iosapp}
                  className="w-16 h-auto sm:w-24"
                  alt="iOS Store"
                />
              </div>
              <div>
                <h3 className="mt-4 mb-2 text-lg font-bold font-heading text-neutral-50">
                  Follow Us
                </h3>
                <div className="flex gap-2 md:gap-4">
                  <a href="#">
                    <LuFacebook className="p-1 rounded size-5 sm:size-6 bg-neutral-600 fill-neutral-100 stroke-none" />
                  </a>
                  <a href="#">
                    <LuInstagram className="p-1 rounded stroke-1 size-5 sm:size-6 bg-neutral-600 stroke-neutral-100" />
                  </a>
                  <a href="#">
                    <BsTwitterX className="p-1 rounded stroke-1 size-5 sm:size-6 bg-neutral-600 fill-neutral-100 stroke-none" />
                  </a>
                  <a href="#">
                    <LuLinkedin className="p-1 rounded stroke-1 size-5 sm:size-6 bg-neutral-600 fill-neutral-100 stroke-none " />
                  </a>
                  <a href="#">
                    <LuYoutube className="p-1 rounded stroke-1 size-5 sm:size-6 bg-neutral-600 stroke-neutral-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
