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
  LuX,
  LuYoutube,
} from "react-icons/lu";
import { LucideMail } from "lucide-react";
import PageLayout from "./PageLayout";

const Footer = () => {
  return (

    <footer className=" bg-neutral-700 dark:bg-gray-800 mt-auto ">
      {/* Newsletter Section */}

      <div className="bg-primary-600 max-w-7xl  xl:mx-auto md:py-16 px-5 md:px-20 rounded-lg -translate-y-20 md:-translate-y-36 mx-5  ">


    <footer className=" bg-[#404040]  dark:bg-gray-800 mt-auto  ">
      {/* Newsletter Section */}
     
        <div className="bg-primary-600 max-w-7xl md:mx-auto md:py-16 px-10 md:px-20 lg:mx-20 xl:mx-auto  rounded-lg -translate-y-20 md:-translate-y-36 mx-5  ">

        <div className=" items-center align-top flex justify-center relative">
          <img src={footericon} alt="icon" className=" hidden md:block w-28 absolute bottom-0" />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <form className="w-full lg:w-2/4 mb-6 lg:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join Our Newsletter
            </h1>
            <div className="relative">
              <input
                type="email"
                id="newsletter-email"
                className="block lg:w-3/4 p-4 pr-32 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="absolute top-2 md:right-36 right-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Subscribe Now
              </button>
            </div>
          </form>
          <div className="text-center lg:text-end w-full lg:w-2/4">
            <h1 className="text-xl font-bold text-white mb-3">Contact Us</h1>
            <ul className="space-y-2">
              <li className="flex justify-center lg:justify-end items-center gap-2 text-white">
                <LuPhone className="text-white" />
                Call on: 0786 778 375 028
              </li>
              <li className="flex justify-center lg:justify-end items-center gap-2 text-white">
                <LuClock className="text-white" />
                Time: 9am to 5pm (Sunday close)
              </li>
              <li className="flex justify-center lg:justify-end items-center gap-2 text-white">
                <LuMapPin className="text-white" />
                789 Pine Drive, Apt 3B
              </li>
              <li className="flex justify-center lg:justify-end items-center gap-2 text-white">
                <LucideMail className="text-white" />
                Pathway67@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>


      <PageLayout>
        {/* Footer Links Section */}
        <div className="container mx-auto px-5 xl:px-0 ">
          <div className="grid grid-cols-2  md:grid-cols-4  xl:grid-cols-5 gap-10  ">
            {/* About Section */}
            <div>
              <a href="/" className="flex mb-5">
                <Logo className="w-24 h-14" />
              </a>
              <p className="text-white dark:text-gray-400">
                Pathway Academy provides the <br /> tools and guidance to turn
                your <br /> goals into achievements.
              </p>
            </div>
            {/* Services */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase">
                Our Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-white hover:underline">
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-white hover:underline">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-white hover:underline">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-white hover:underline">
                    Content Writing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-white hover:underline">
                    Language
                  </a>
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="about-us"
                    className="text-xs text-white hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="contact-us"
                    className="text-xs text-white hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="blog" className="text-xs text-white hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="signup"
                    className="text-xs text-white hover:underline"
                  >
                    Signup Student
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-white hover:underline">
                    Signup Instructor
                  </a>
                </li>
              </ul>
            </div>
            {/* Community */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase">
                Community
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="support"
                    className=" flex items-center gap-1 text-xs text-white hover:underline"
                  >
                    <span> Support</span> <LuExternalLink />
                  </a>
                </li>
                <li>
                  <a href="faq" className="text-xs text-white hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="privacy-policy"
                    className="text-xs text-white hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="termsandcondition"
                    className="text-xs text-white hover:underline"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            {/* Social Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white uppercase">
                App Available On
              </h3>
              <div className="flex gap-2 mb-4">
                <img
                  src={androidapp}
                  className="w-24 h-auto"
                  alt="Android Store"
                />
                <img src={iosapp} className="w-24 h-auto" alt="iOS Store" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-white uppercase">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-white">
                  <LuFacebook className="w-6 h-6 bg-[#525252] p-1 rounded" />
                </a>
                <a href="#" className="text-white">
                  <LuInstagram className="w-6 h-6 bg-[#525252] p-1 rounded" />

     <PageLayout>
      
      {/* Footer Links Section */}
      <div className="max-w-7xl md:mx-auto mb-5 mx-5 sm:px-10 md:px-20 lg:mx-20 xl:mx-auto ">
      
        <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-2 md:gap-10  ">
          {/* About Section */}
          <div className=" " >
            <a href="/" className="flex md:mb-5">
              <Logo className="w-24 h-14" />
            </a>
            <p className="text-white text-sm md:text-base dark:text-gray-400">
              Pathway Academy provides the <br /> tools and guidance to turn
              your <br /> goals into achievements.
            </p>
          </div>
          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase">
              Our Services
            </h3>
            <ul className="md:space-y-2">
              <li>
                <a href="#" className="text-xs text-white hover:underline">
                  Business Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
                  Content Writing
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
                  Language
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase">
              Quick Links
            </h3>
            <ul className="md:space-y-2">
              <li>
                <a href="about-us" className="text-xs text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="contact-us" className="text-xs text-white hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="blog" className="text-xs text-white hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="signup" className="text-xs text-white hover:underline">
                  Signup Student
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
                  Signup Instructor
                </a>
              </li>
            </ul>
          </div>
          {/* Community */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white uppercase">
              Community
            </h3>
            <ul className="md:space-y-2">
              <li>
                <a
                  href="support"
                  className=" flex items-center gap-1 text-xs text-white hover:underline"
                >
                  <span> Support</span> <LuExternalLink />

                </a>
                <a href="#" className="text-white">
                  <LuX className="w-6 h-6 bg-[#525252] p-1 rounded" />
                </a>
                <a href="#" className="text-white">
                  <LuLinkedin className="w-6 h-6 bg-[#525252] p-1 rounded" />
                </a>
                <a href="#" className="text-white">
                  <LuYoutube className="w-6 h-6 bg-[#525252] p-1 rounded" />
                </a>

              </div>

              </li>
            </ul>
          </div>
          {/* Social Links */}

          <div className="flex flex-col gap-2 mb-4">
            <h3 className="md:mb-4 text-sm font-semibold text-white uppercase">
              App Available 
            </h3>
              <img
                src={androidapp}
                className="w-24 h-auto"
                alt="Android Store"
              />
              <img src={iosapp} className="w-24 h-auto" alt="iOS Store" />
            </div>


          <div>
           
            
            <h3 className="mb-2 text-sm font-semibold text-white uppercase">
              Follow Us
            </h3>
            <div className="flex gap-2 md:gap-4">
              <a href="#" className="text-white">
                <LuFacebook className="w-6 h-6 bg-[#525252] p-1 rounded" />
              </a>
              <a href="#" className="text-white">
                <LuInstagram className="w-6 h-6 bg-[#525252] p-1 rounded" />
              </a>
              <a href="#" className="text-white">
                <LuX className="w-6 h-6 bg-[#525252] p-1 rounded" />
              </a>
              <a href="#" className="text-white">
                <LuLinkedin className="w-6 h-6 bg-[#525252] p-1 rounded" />
              </a>
              <a href="#" className="text-white">
                <LuYoutube className="w-6 h-6 bg-[#525252] p-1 rounded" />
              </a>

            </div>
          </div>
        </div>
      </PageLayout>
    </footer>
  );
};

export default Footer;
