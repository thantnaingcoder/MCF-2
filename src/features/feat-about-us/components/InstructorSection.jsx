import InstructorContainer from "./InstructorContainer";

const InstructorSection = () => {
  return (
    <section className="pb-10 md:pb-20 xl:pb-32  ">
      <h1 className="text-center text-xl md:text-3xl mb-5 leading-10 font-heading font-semibold text-neutral-900 ">
        Our Experience Instructors
      </h1>
      <h3 className="sm:px-0 px-5 text-center text-base leading-[22px]  text-neutral-500 mb-5 lg:mb-10">
        Learn from the best and achieve your goals with our exceptional
        instructors.
      </h3>

      <InstructorContainer />
    </section>
  );
};

export default InstructorSection;
