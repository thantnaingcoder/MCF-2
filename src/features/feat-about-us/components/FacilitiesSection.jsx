import Facilities from "../../../assets/aboutUs/heroOther/Facilities.png";
import PageLayout from "../../public/components/PageLayout";
import FacilitiesContainer from "./FacilitiesContainer";

const FacilitiesSection = () => {
  return (
    <section className="pb-10 md:pb-20 xl:pb-32 ">
      <PageLayout>
        <div className="grid xl:grid-cols-12 grid-cols-1 gap-10 xl:px-0 px-5 ">
          <div className="col-span-1 xl:col-span-5 mx-0 sm:mx-auto xl:mx-0 ">
            <img src={Facilities} alt="Facilities" className="rounded-md" />
          </div>
          <div className="col-span-1 xl:col-span-7 space-y-3 md:space-y-4 mt-0 md:mt-3 xl:mt-8">
            <h2 className="text-xl sm:text-3xl leading-10 font-heading font-bold text-neutral-900 ">
              Our Facilities
            </h2>

            <p className="  leading-6 text-neutral-500 sm:text-xl sm:leading-8  ">
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
