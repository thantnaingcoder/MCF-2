import React from 'react'
import AccordionFaq from '../AccordionFaq'

const FAQs = () => {
  const AccordionArray = [
    {
      title: "What will I learn in this course?",
      description:
        "You’ll learn JavaScript fundamentals, including variables, functions, arrays, objects, DOM manipulation, and asynchronous programming. By the end, you’ll be able to build interactive, dynamic web pages and small projects.",
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
    <div >
        <h1 className=" text-center md:text-start md:ms-5 font-heading mb-4 text-[#171717] text-[20px] md:text-[31px] font-bold">
        Frequently Asked Questions
        </h1>

        <div>
          <AccordionFaq AccordionArray={AccordionArray} />
        </div>
    </div>
  )
}

export default FAQs