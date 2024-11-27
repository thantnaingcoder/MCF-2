

const faqs = [
  {
    question: "What types of courses do you offer?",
    answer: "We offer a wide range of courses across various disciplines...",
  },
  {
    question: "Can I access courses on my mobile device?",
    answer: "Yes, all our courses are fully accessible on mobile devices...",
  },
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking the 'Forgot Password' link...",
  },
  {
    question: "Are there any discounts or promotions for courses?",
    answer: "We regularly offer promotional discounts and special offers...",
  },
  {
    question: "How can I contact my instructor if I have questions?",
    answer: "You can contact your instructor through our messaging system...",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 30-day money-back guarantee...",
  },
];

const FaqSection = () => {
  return (
    <div>
      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Popular Frequently Ask Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
