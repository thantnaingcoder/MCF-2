import HeroAboutUs from "../../../assets/aboutUs/heroOther/heroSection.png";
import HeroSection from "../../public/components/HeroSection";
const HeroSectionAboutUs = () => {
  return (
    <section className="lg:mb-24 md:mb-20 mb-15">
      <HeroSection image={HeroAboutUs} title={"About Us"} />
    </section>
  );
};

export default HeroSectionAboutUs;
