import Facilities from "../../assets/aboutUs/heroOther/Facilities.png";
import PageLayout from "../../features/public/components/PageLayout";
import FacilitiesContainer from "./FacilitiesContainer";

const FacilitiesSection = () => {
  return (
    <section className="pb-10 md:pb-20 xl:pb-32 ">
      <PageLayout>
        <div className="grid grid-cols-1 gap-10 px-5 xl:grid-cols-12 xl:px-0 ">
          <div className="col-span-1 mx-0 xl:col-span-5 sm:mx-auto xl:mx-0 ">
            <img src={Facilities} alt="Facilities" className="rounded-md" />
          </div>
          <div className="col-span-1 mt-0 space-y-3 xl:col-span-7 md:space-y-4 md:mt-3 xl:mt-8">
            <h2 className="text-xl font-bold leading-10 sm:text-3xl font-heading text-neutral-900 ">
              Our Facilities
            </h2>

            <p className="leading-6 text-neutral-500 sm:text-xl sm:leading-8">
              "Our platform is designed for learners with busy schedules,
              allowing you to learn whenever it's convenient for you."
            </p>

            <div>
              <FacilitiesContainer />
            </div>
          </div>
        </div>
      </PageLayout>
    </section>
  );
};

export default FacilitiesSection;
