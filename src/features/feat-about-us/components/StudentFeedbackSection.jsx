import StudentFeedBackContainer from "./StudentFeedBackContainer";

const StudentFeedbackSection = () => {
  return (
    <section className="mb-10 md:mb-15 lg:mb-20 px-5 md:px-0 pb-20 md:pb-40 ">
      <h1 className="  mb-12  text-center  text-2xl leading-10 md:text-3xl font-heading font-bold text-neutral-900">
        Some valuable feedback from our students
      </h1>
      {/* testimonial container */}
      <StudentFeedBackContainer />
    </section>
  );
};

export default StudentFeedbackSection;
