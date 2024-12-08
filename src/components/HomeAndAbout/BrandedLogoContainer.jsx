import Hewlett from "../../assets/aboutUs/otherIcon/hewlett_logo.svg";
import Volkswagen from "../../assets/aboutUs/otherIcon/volkswagen_logo.svg";
import Cisco from "../../assets/aboutUs/otherIcon/cisco_logo.svg";
import Samsung from "../../assets/aboutUs/otherIcon/samsung_logo.svg";
import Vimeo from "../../assets/aboutUs/otherIcon/vimeo_logo.svg";
import Citi from "../../assets/aboutUs/otherIcon/citi_logo.svg";
import Ericsson from "../../assets/aboutUs/otherIcon/ericsson_logo.svg";
import Marquee from "react-fast-marquee";
import PageLayout from "../../features/public/components/PageLayout";

const BrandedLogoContainer = () => {
  const logos = [
    {
      iconUrl: <img src={Hewlett} alt="Hewlett Logo" className="h-10" />,
    },
    {
      iconUrl: <img src={Volkswagen} alt="Volkswagen Logo" className="h-12" />,
    },
    {
      iconUrl: <img src={Cisco} alt="Cisco Logo" className="h-10" />,
    },
    {
      iconUrl: <img src={Samsung} alt="Samsung Logo" className="h-8" />,
    },
    {
      iconUrl: <img src={Vimeo} alt="Vimeo Logo" className="h-10" />,
    },
    {
      iconUrl: <img src={Citi} alt="Citi Logo" className="h-10" />,
    },
    {
      iconUrl: <img src={Ericsson} alt="Ericsson Logo" className="h-12" />,
    },
  ];

  return (
    <PageLayout>
      <Marquee
        autoFill
        gradient
        gradientWidth={80}
        gradientColor="white"
        pauseOnHover
      >
        <div className="flex items-center justify-between pl-16 space-x-10 md:space-x-20 md:pl-24">
          {logos.map((logo, index) => (
            <p key={index}>{logo.iconUrl}</p>
          ))}
        </div>
      </Marquee>
    </PageLayout>
  );
};

export default BrandedLogoContainer;
