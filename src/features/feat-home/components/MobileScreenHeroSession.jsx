import React from 'react'

const MobileScreenHeroSession = () => {
  return (
    <div className=" md:hidden   container max-w-full bg-primary-50 p-5   z-20   flex-col gap-5     ">
        <h1 className=" font-label text-[#FD9035] text-[15px]">
          Your path to knowledge, made simple
        </h1>
        <p className=" font-heading font-bold text-[30px] text-[#110808] leading-[51px] ">
          Your Journey to <br /> knowledge starts{" "}
          <p className=" inline-block text-primary-600">here</p>
        </p>
        <p className=" mb-5 text-[#110808] text-[15px] leading-[26px]">
          Whether you're here to learn something new, enhance your skills, or
          explore your passions, Pathway Academy provides the tools and guidance
          to turn your goals into achieve
        </p>

        <div className=" flex items-center">
          <button
            to="signup"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Learn More
          </button>

          <button
            to="signup"
            className=" bg-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Learn More
          </button>
        </div>
      </div>
  )
}

export default MobileScreenHeroSession