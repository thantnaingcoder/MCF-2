import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionFaq = ({AccordionArray}) => {
  
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-3"
      >
        {AccordionArray.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-[16px] md:text-[20px]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-left md:text-[18px]">
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionFaq;
