import PageLayout from "../public/components/PageLayout";
import TermAndConditionList from "./TermAndConditionList";

const TermAndConditionContainer = () => {
  const terms = [
    {
      id: 1,
      title: "Introduction",
      description:
        "By using Pathway Academy’s services, including enrolling in courses, you agree to these Terms and Conditions. Pathway Academy reserves the right to modify these terms at any time. For questions, contact pathway67@gmail.com.",
    },
    {
      id: 2,
      title: "Eligibility",
      description:
        "You must be at least 16 years old to enroll. If under 18, parental consent is required. You are responsible for ensuring your information is accurate and up-to-date.",
    },
    {
      id: 3,
      title: "Services Provided",
      description:
        "Pathway Academy offers online courses, workshops, and educational programs. Course materials are provided for personal use and access is limited to the duration of your enrollment.",
    },
    {
      id: 4,
      title: "Account Creation",
      description:
        "To enroll, you must create an account. You are responsible for keeping your login information secure. Do not share your account or misuse the platform.",
    },
    {
      id: 5,
      title: "Course Enrollment and Fees",
      description:
        "Enrollment requires payment. Accepted payment methods include KPZ Pay, AYA Pay, and Wave Pay. Refunds are available within 7 days of enrollment if you haven't accessed the course. After 7 days, refunds are provided only under exceptional circumstances.",
    },
    {
      id: 6,
      title: "Intellectual Property",
      description:
        "All content (videos, materials, etc.) is owned by Pathway Academy. You are granted a non-transferable, non-commercial license to access and use course materials.",
    },
    {
      id: 7,
      title: "Code of Conduct",
      description:
        "Respectful behavior is expected in all interactions. Pathway Academy reserves the right to suspend or terminate your access for misconduct. No refunds are given if your access is terminated for violations.",
    },
    {
      id: 8,
      title: "Privacy and Data Collection",
      description:
        "We collect personal information to process your enrollment, payments, and improve services. Your data will be protected but shared with trusted third parties for payment processing or communication purposes.",
    },
    {
      id: 9,
      title: "Limitation of Liability",
      description:
        "Pathway Academy is not liable for any damages or losses related to course access or use. Our liability is limited to the amount you paid for the course.",
    },
    {
      id: 10,
      title: "Termination",
      description:
        "You can terminate your account by contacting us. We may suspend or terminate your access for failure to comply with these Terms. Fees will not be refunded if your access is terminated due to violations.",
    },
    {
      id: 11,
      title: "Amendments",
      description:
        "We may update these Terms at any time. Continued use of our services after changes means you accept the updated Terms.",
    },
    {
      id: 12,
      title: "Contact Information",
      description: "For support or inquiries, contact us at:",
    },
  ];

  return (
    <section className="px-5 pb-20 mb-10 md:mb-15 lg:mb-20 md:px-0 md:pb-40">
      <PageLayout>
        <div className="max-w-5xl space-y-4 md:px-5 lg:px-0 ">
          {terms.map((term) => (
            <TermAndConditionList key={term.id} {...term} />
          ))}
        </div>
      </PageLayout>
    </section>
  );
};

export default TermAndConditionContainer;
