import React from "react";
import upArrow from "../../assets/up-arrow.png";
const BackToTopButton = () => {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <img
        className="duration-100  hover:scale-105 active:scale-90 w-12 h-12 md:w-16 md:h-16"
        src={upArrow}
        alt="toTop"
      />
    </button>
  );
};

export default BackToTopButton;
