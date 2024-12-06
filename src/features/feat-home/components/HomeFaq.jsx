import React from "react";
import LabelHeading from "./LabelHeading";

import AccordionFaq from "./AccordionFaq";

const HomeFaq = () => {
  const AccordionArray = [
    {
      title: "What types of courses do you offer?",
      description:
        "We offer a wide range of courses, including programming, design, marketing, and more. Our courses are designed to meet the needs of professionals and enthusiasts alike.",
    },
    {
      title: "Can I access courses on my mobile device?",
      description:
        "Yes, you can access our courses on your mobile device. Our mobile-friendly interface makes it easy to navigate and learn on the go.",
    },
    {
      title: "How do I reset my password?",
      description:
        "To reset your password, click on the 'Forgot Password' link on the login page. Follow the instructions to enter your email address and receive a link to reset your password.",
    },
    {
      title: "Are there any discounts or promotions for courses?",
      description:
        "Yes, we offer discounts and promotions on certain courses. Check our website or contact our sales team for more information.",
    },
    {
      title: "How can I contact my instructor if I have questions?",
      description:
        "You can contact your instructor through the course page or by email. Our team is available to assist you with any questions or concerns you may have.",
    },
    {
      title: "Can I get a refund if I'm not satisfied with my purchase?",
      description:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your purchase, you can return it within 30 days for a full refund.",
    },
  ];
  return (
    <div className="px-5 mb-10 md:mb-15 lg:mb-20 md:px-0 md:pb-10">
      <LabelHeading label="FAQ" heading="Popular Frequently asked questions" />
      <div className="mx-2 md:w-3/4 md:mx-auto">
        <AccordionFaq AccordionArray={AccordionArray} />
      </div>
    </div>
  );
};

export default HomeFaq;
