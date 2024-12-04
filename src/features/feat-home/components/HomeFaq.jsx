import React from "react";
import LabelHeading from "./LabelHeading";

import AccordionFaq from "./AccordionFaq";

const HomeFaq = () => {
  return (
    <div className=" mt-10 md:mt-20">
      <LabelHeading label="FAQ" heading="Popular Frequently asked questions" />

      <AccordionFaq />
    </div>
  );
};

export default HomeFaq;
