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

const Footer = () => {
  return (
    // <footer className="py-12 bg-[#404040] xl:pt-24 dark:bg-gray-800 mt-auto relative">
    //   <div className=" bg-primary-600 p-16 absolute bottom-[280px] left-[99px] rounded w-[1280px] mb-10">
    //     <div className=" flex justify-between items-center">
    //       <form className="w-2/4">
    //         <h1 className=" text-3xl font-bold text-white mb-1">
    //           Join Our News Letter
    //         </h1>
    //         <label
    //           htmlFor="default-search"
    //           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    //         >
    //           Search
    //         </label>
    //         <div className="relative">
    //           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
    //           <input
    //             type="search"
    //             id="default-search"
    //             className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //             placeholder="Enter your email address"
    //           />
    //           <button
    //             type="submit"
    //             className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //           >
    //             Subscribe Now
    //           </button>
    //         </div>
    //       </form>
    //       <div className="text-end">
    //         <h1 className="text-xl font-bold text-white mb-3">Contact Us</h1>
    //         <ul className="space-y-1 text-end">
    //           <li className="flex justify-end items-center gap-1 text-white">
    //             <span>
    //               <LuPhone className="size-4 text-white" />
    //             </span>
    //             Call on: 0786 778 375 028
    //           </li>
    //           <li className="flex justify-end items-center gap-1 text-white">
    //             <span>
    //               <LuClock className="size-4 text-white" />
    //             </span>
    //             Time: 9am to 5pm (Sunday close)
    //           </li>
    //           <li className="flex justify-end items-center gap-1 text-white">
    //             <span>
    //               <LuMapPin className="size-4 text-white" />
    //             </span>
    //             789 Pine Drive, Apt 3B
    //           </li>
    //           <li className="flex justify-end items-center gap-1 text-white">
    //             <span>
    //               <LucideMail className="size-4 text-white" />
    //             </span>
    //             Pathway67@gmail.com
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" mx-auto max-w-screen-xl px-4 2xl:px-0 mt-5">
    //     <div className="grid gap-12 xl:grid-cols-6 xl:gap-24">
    //       <div className="col-span-2">
    //         <a href="/" className="flex mb-5">
    //           <Logo className=" w-24 h-14" />
    //         </a>
    //         <p className="max-w-lg mb-3 text-white dark:text-gray-400">
    //           Pathway Academy provides the <br /> tools and guidance to turn
    //           your <br /> goals into achievements
    //         </p>
    //       </div>
    //       <div>
    //         <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
    //           Our Service
    //         </h3>
    //         <ul>
    //           <li className="mb-4">
    //             <a
    //               href="https://flowbite.com/"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Business Strategy
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a
    //               href="https://flowbite.com/blocks/"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Web Design
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a
    //               href="https://flowbite.com/figma/"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Digital Marketing
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a
    //               href="https://flowbite.com/icons/"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Content Writing
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a
    //               href="https://chat.openai.com/g/g-y7yC35HB9-flowbite-gpt"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Language
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
    //           Quick links
    //         </h3>
    //         <ul>
    //           <li className="mb-4">
    //             <a
    //               href="https://flowbite.com/contact/"
    //               rel="noreferrer nofollow"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               About us
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a
    //               href="https://github.com/themesberg/flowbite/discussions"
    //               rel="noreferrer nofollow"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Contact us
    //             </a>
    //           </li>
    //           <li className="mb-4 flex items-center">
    //             <a
    //               href="https://flowbite.com/work-with-us/"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Blog
    //             </a>
    //           </li>
    //           <li className="mb-4 flex items-center">
    //             <a
    //               href="https://flowbite.com/work-with-us/"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Signup Student
    //             </a>
    //           </li>
    //           <li className="mb-4 flex items-center">
    //             <a
    //               href="https://flowbite.com/work-with-us/"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Signup Instructor
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
    //           Community
    //         </h3>
    //         <ul>
    //           <li className="mb-4">
    //             <a
    //               href="https://discord.gg/4eeurUVvTy"
    //               rel="noreferrer nofollow"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               <div className=" flex items-center gap-1">
    //                 <span> Support</span> <LuExternalLink />
    //               </div>
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a
    //               href="https://github.com/themesberg/flowbite"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Faq
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a
    //               href="https://twitter.com/zoltanszogyenyi"
    //               rel="noreferrer nofollow"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Privacy Policy
    //             </a>
    //           </li>
    //           <li className="mb-4">
    //             <a
    //               href="https://www.linkedin.com/in/zoltanszogyenyi/"
    //               rel="noreferrer nofollow"
    //               className="text-xs text-white dark:text-gray-400 dark:hover:text-white hover:underline"
    //             >
    //               Terms&Condition
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="mb-2 text-sm font-semibold text-white uppercase dark:text-white">
    //           App Available on
    //         </h3>
    //         <ul>
    //           <li className="mb-4">
    //             <div className=" flex gap-2">
    //               <img src={androidapp} className=" w-18 h-6" alt="app-store" />
    //               <img src={iosapp} className=" w-18 h-6" alt="ios-store" />
    //             </div>
    //           </li>
    //           <li className="mb-4">
    //             <a
    //               href="https://flowbite.com/privacy-policy/"
    //               className="font-medium text-white dark:text-white dark:hover:text-white hover:underline"
    //             >
    //               Follow on
    //             </a>
    //             <div className=" flex gap-2 mt-5 items-center justify-center ms-5">
    //               <li className="mb-4">
    //                 <a
    //                   href="https://flowbite.com/terms-and-conditions/"
    //                   className="font-medium text-white dark:text-white  dark:hover:text-white hover:underline"
    //                 >
    //                   <LuFacebook className=" size-6 rounded  bg-[#525252] p-0.5" />
    //                 </a>
    //               </li>
    //               <li className="mb-4">
    //                 <a
    //                   href="https://flowbite.com/brand/"
    //                   className="font-medium hover:underline text-white dark:text-white  dark:hover:text-white"
    //                 >
    //                   <LuInstagram className=" size-6 rounded  bg-[#525252] p-0.5" />
    //                 </a>
    //               </li>
    //               <li className="mb-4">
    //                 <a
    //                   href="https://flowbite.com/brand/"
    //                   className="font-medium text-white dark:text-white dark:hover:text-white hover:underline"
    //                 >
    //                   <LuX className=" size-6 rounded  bg-[#525252] p-0.5" />
    //                 </a>
    //               </li>
    //               <li className="mb-4">
    //                 <a
    //                   href="https://flowbite.com/brand/"
    //                   className="font-medium text-white dark:text-white dark:hover:text-white hover:underline"
    //                 >
    //                   <LuLinkedin className=" size-6 rounded  bg-[#525252] p-0.5" />
    //                 </a>
    //               </li>
    //               <li className="mb-4">
    //                 <a
    //                   href="https://flowbite.com/brand/"
    //                   className="font-medium text-white dark:text-white dark:hover:text-white hover:underline"
    //                 >
    //                   <LuYoutube className=" size-6 rounded  bg-[#525252] p-0.5" />
    //                 </a>
    //               </li>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className=" bg-[#404040] xl:pt-24 dark:bg-gray-800 mt-auto relative">
      {/* Newsletter Section */}
      <div className="bg-primary-600 p-8 md:p-12 lg:p-16 absolute bottom-24 md:bottom-32 lg:bottom-48 left-4 md:left-8 lg:left-24 rounded w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] max-w-7xl mx-auto md:mb-20 lg:mb-10">
        <div className=" items-center align-top flex justify-center relative">
          <img src={footericon} alt="icon" className="w-28 absolute bottom-0" />
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
                className="block w-3/4 p-4 pr-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="absolute right-40 top-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
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

      {/* Footer Links Section */}
      <div className="container mx-auto px-4 xl:px-0 mt-20 py-3">
        <div className="grid gap-12 xl:grid-cols-6 xl:gap-16">
          {/* About Section */}
          <div className="col-span-2">
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
                <a href="#" className="text-xs text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
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
                  href="#"
                  className=" flex items-center gap-1 text-xs text-white hover:underline"
                >
                  <span> Support</span> <LuExternalLink />
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-white hover:underline">
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
      </div>
    </footer>
  );
};

export default Footer;
