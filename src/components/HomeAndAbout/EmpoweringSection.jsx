import Empowering from "../../assets/aboutUs/heroOther/empowering.png";
import CircleCheck from "../../assets/aboutUs/otherIcon/circle-check.svg";
import PageLayout from "../../features/public/components/PageLayout";
const EmpoweringSection = () => {
  return (
    <section className="pb-10 md:pb-16 xl:pb-32">
      <PageLayout>
        <div className="grid grid-cols-1 gap-10 px-5 xl:grid-cols-12 xl:px-0 ">
          <div className="col-span-1 mx-0 xl:col-span-5 sm:mx-auto xl:mx-0 ">
            <img
              src={Empowering}
              alt="empowering"
              className="object-cover object-top w-full h-full rounded-md"
            />
          </div>
          <div className="col-span-1 xl:col-span-7">
            <div className="w-full mt-0 space-y-5 lg:w-4/5 md:mt-3 lg:mt-16">
              <h1 className="block lg:hidden font-label text-sm md:text-2xl text-[#FD7E14] ">
                Welcome
              </h1>
              <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl font-heading text-neutral-900 ">
                Empowering Your Journey to Success
              </h2>

              <p className="  text-neutral-500 text-base md:text-xl md:leading-[32.02px] ">
                "Our platform offers expertly crafted courses, personalized
                learning paths, and round-the-clock support to help you reach
                your goals faster."
              </p>

              <div className="space-y-3 md:space-y-5">
                {[
                  "Access to exclusive webinars and workshops",
                  "90% of students report skill improvement",
                  "Courses aligned with industry standards",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <img
                      src={CircleCheck}
                      alt="Check"
                      className="size-5 text-primary-500"
                    />
                    <span className="font-heading text-neutral-700 text-sm sm:text-base leading-[22px] ">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className="bg-primary-500 hover:bg-neutral-800 text-neutral-50 px-4 py-2.5 rounded-md 
              text-sm font-heading transition-all duration-500 transform hover:scale-105
              shadow-lg hover:shadow-primary-500/25"
              >
                Apply now
              </button>
            </div>
          </div>
        </div>
      </PageLayout>
    </section>
  );
};

export default EmpoweringSection;
