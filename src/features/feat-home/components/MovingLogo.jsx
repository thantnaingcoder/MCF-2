import React from "react";
import Cisco from "../../../assets/aboutUs/otherIcon/cisco.svg";
import Citi from "../../../assets/aboutUs/otherIcon/citi.svg";
import Ericsson from "../../../assets/aboutUs/otherIcon/ericsson.svg";
import Hewlett from "../../../assets/aboutUs/otherIcon/hewlett.svg";
import Samsung from "../../../assets/aboutUs/otherIcon/samsung.svg";
import Vimeo from "../../../assets/aboutUs/otherIcon/vimeo.svg";
import volkswagen from "../../../assets/aboutUs/otherIcon/volkswagen.svg";

import { memo, useEffect, useRef } from "react";

const MovingLogo = () => {
  const containerRef = useRef(null);

  const Logos = [
    {
      icon: Hewlett,
    },
    {
      icon: volkswagen,
    },
    {
      icon: Cisco,
    },
    {
      icon: Samsung,
    },
    {
      icon: Vimeo,
    },

    {
      icon: Citi,
    },
    {
      icon: Ericsson,
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    // const containerWidth = container.offsetWidth

    let distance = 0;
    let animationId;

    const animate = () => {
      distance += 0.5;
      if (distance >= scrollWidth / 3) {
        distance = 0;
      }
      container.style.transform = `translateX(-${distance}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-6  md:py-12">
      <div ref={containerRef} className="flex w-max">
        {[...Logos, ...Logos, ...Logos].map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className=" flex min-w-[100px] border-1 dark:bg-inherit backdrop-blur-lg  dark:border-[#1b2c68a0] dark:md:border-none bg-inherit  flex-col items-center justify-center rounded-xl  p-3 md:p-6  dark:shadow-xl duration-200 transition-colors dark:md:hover:shadow-blue-800 mx-1 "
          >
            <div className=" md:w-56 ">
              <img src={tech.icon} alt={`${tech.name} icon`} />
            </div>
          </div>
        ))}
      </div>

      {/* Add a gradient overlay to soften the edges */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white md:hidden  dark:from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white md:hidden dark:from-black" /> */}
    </div>
  );
};

export default memo(MovingLogo);
