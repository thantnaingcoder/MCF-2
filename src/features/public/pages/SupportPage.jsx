import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  User,
  ShoppingCart,
  Newspaper,
  Lock,
  Rocket,
  TriangleAlert,
  IdCard,
} from "lucide-react";
import { Link } from "react-router-dom";

const SupportPage = () => {
  const categories = [
    {
      icon: <User className="w-6 h-6" />,
      title: "My Account",
      description: "Create and manage your pathway academy account.",
    },
    {
      icon: <TriangleAlert className="w-6 h-6" />,
      title: "Troubleshooting",
      description: "Experiencing a technical issue? Check Here.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Purchase/Refund",
      description:
        "Learn about purchasing courses, how to send gifts, and refunds.",
    },
    {
      icon: <IdCard className="w-6 h-6" />,
      title: "Enrollment",
      description: "Find courses to take and learn about enrollment options.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Trust & Safety",
      description: "Trust & safety information and reporting.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Getting Started",
      description: "Learn how our education works and how to start learning.",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#a4f4c5] py-20">
        <div className="container mx-auto text-center">
          <h1 className="mb-8 text-4xl font-bold">How can we help?</h1>
          <div className="max-w-xl mx-auto px-2">
            <Input
              type="search"
              placeholder="Search for help..."
              className="h-12 bg-white"
            />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          How Can We Help You?
        </h2>
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-[#effaf4] mb-3 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center gap-4 mb-3 font-semibold">
                {category.icon}
              </div>
              <div className=" items-center justify-center text-center">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="container px-3 py-16 mb-36 lg:mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">
          Popular Frequently Ask Questions
        </h2>
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="mb-4">
              <AccordionTrigger>
                What types of courses do you offer?
              </AccordionTrigger>
              <AccordionContent>
                We offer a wide range of courses including business strategy,
                development, web design, digital marketing, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mb-4">
              <AccordionTrigger>
                Can I access courses on my mobile device?
              </AccordionTrigger>
              <AccordionContent>
                Yes, all our courses are fully accessible on mobile devices
                through our mobile app or web browser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="mb-4">
              <AccordionTrigger>How do I reset my password?</AccordionTrigger>
              <AccordionContent>
                You can reset your password by clicking on the "Forgot Password"
                link on the login page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="mb-4">
              <AccordionTrigger>
                Are there any discounts or promotions for courses?
              </AccordionTrigger>
              <AccordionContent>
                We regularly offer promotions and discounts. Sign up for our
                newsletter to stay updated.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="mb-4">
              <AccordionTrigger>
                How can I contact my instructor if I have questions?
              </AccordionTrigger>
              <AccordionContent>
                You can contact your instructor through the course discussion
                board or direct messaging system.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="mb-4">
              <AccordionTrigger>
                Can I get a refund if I'm not satisfied?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 30-day money-back guarantee if you're not
                satisfied with your course.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

// function CategoryCard({ icon, title, description }) {
//   return (
//     <div className="bg-[#effaf4] container mx-auto py-3 rounded-lg text-center hover:shadow-lg transition-shadow">
//       <div className="inline-flex items-center justify-center w-12 h-12  mb-4">
//         {icon}
//       </div>
//       <h3 className="mb-2 font-bold">{title}</h3>
//       <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
//     </div>
//   );

export default SupportPage;
