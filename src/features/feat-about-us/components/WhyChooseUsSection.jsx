import WhyChooseUsContainer from "./WhyChooseUsContainer";
import PageLayout from "../../public/components/PageLayout";

const WhyChooseUsSection = () => {
  // lg:mb-24 md:mb-15 mb-10
  return (
    <section className=" pb-10 md:pb-20  xl:pb-32 ">
      <PageLayout>
        <h1 className="mt-12 mb-10 text-lg font-semibold text-center text-neutral-900 font-heading lg:text-3xl">
          Why Choose Us
        </h1>

        <WhyChooseUsContainer />
      </PageLayout>
    </section>
  );
};

export default WhyChooseUsSection;
