import StudentFeedBackContainer from "./StudentFeedBackContainer";

const StudentFeedbackSection = ({ className }) => {
  return (
    <section className={`${className}`}>
      <h1 className="mb-12 text-2xl font-bold leading-10 text-center md:text-3xl font-heading text-neutral-900">
        Some valuable feedback from our students
      </h1>
      {/* testimonial container */}
      <StudentFeedBackContainer />
    </section>
  );
};

export default StudentFeedbackSection;
