import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
// import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'
import { Link } from "react-router-dom";
import askPhoto from "../../../assets/faq/ask.png";
import faqheroSection from "../../../assets/faq/heroSection.png";
import {
  LuClock,
  LuExternalLink,
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuMapPin,
  LuPhone,
  LuYoutube,
} from "react-icons/lu";

import { BsTwitterX } from "react-icons/bs";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <img
          src={faqheroSection}
          alt="FAQ Hero Section"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />
        <div className="container mx-auto relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">FAQs</h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 mt-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Popular Frequently Ask Questions
          </h2>

          <Tabs defaultValue="general" className="max-w-3xl mx-auto">
            <div className="sm:px-5">
              <TabsList className="grid grid-cols-4 lg:w-[600px] md:w-[500px] mx-auto w-[340px] px-1 gap-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="subscription">Subscription</TabsTrigger>
                <TabsTrigger value="pricing">Pricing&Plan</TabsTrigger>
              </TabsList>
            </div>

            {/* general faq */}
            <TabsContent value="general" className=" mt-3 sm:mt-5 sm: px-5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className=" mb-5">
                  <AccordionTrigger>
                    What types of courses do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className=" mb-5">
                  <AccordionTrigger>
                    Can I access courses on my mobile device?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all our courses are fully accessible on mobile devices
                    through our responsive website and dedicated mobile apps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className=" mb-5">
                  <AccordionTrigger>
                    How do I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reset your password by clicking the "Forgot
                    Password" link on the login page and following the
                    instructions sent to your email.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className=" mb-5">
                  <AccordionTrigger>
                    Are there any discounts or promotions for courses?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className=" mb-5">
                  <AccordionTrigger>
                    How can I contact my instructor if I have questions?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className=" mb-5">
                  <AccordionTrigger>
                    Can I get a refund if I'm not satisfied?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* courses faq */}

            <TabsContent value="courses">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What types of courses do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I access courses on my mobile device?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all our courses are fully accessible on mobile devices
                    through our responsive website and dedicated mobile apps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reset your password by clicking the "Forgot
                    Password" link on the login page and following the
                    instructions sent to your email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* subscription faq */}
            <TabsContent value="subscription">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What types of courses do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I access courses on my mobile device?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all our courses are fully accessible on mobile devices
                    through our responsive website and dedicated mobile apps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reset your password by clicking the "Forgot
                    Password" link on the login page and following the
                    instructions sent to your email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* pricing & plan faq */}

            <TabsContent value="pricing">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What types of courses do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a wide range of courses across various disciplines
                    including technology, business, creative arts, and personal
                    development.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can I access courses on my mobile device?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all our courses are fully accessible on mobile devices
                    through our responsive website and dedicated mobile apps.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How do I reset my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can reset your password by clicking the "Forgot
                    Password" link on the login page and following the
                    instructions sent to your email.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Additional tab contents would follow the same pattern */}
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 mb-44">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 justify-center items-center text-center">
            Ask us anything
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative h-[400px] md:h-auto group transition-all duration-300 flex-col overflow-hidden rounded-xl">
              <img
                src={askPhoto}
                alt="Contact support"
                className=" transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover sm:rounded-md px-5"
              />
            </div>
            <div>
              <form className="space-y-4 mt-10 px-5 lg:px-0 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
                  <div>
                    <p>Name</p>
                    <Input type="text" />
                  </div>
                  <div>
                    <p>Email</p>
                    <Input type="email" />
                  </div>
                </div>
                <div>
                  <p>Phone</p>
                  <Input type="tel" className=" mb-7" />
                </div>
                <div>
                  <p>Message</p>
                  <Textarea
                    placeholder="Type a question"
                    className=" mb-7"
                    rows={6}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 px-10"
                >
                  Submit
                </Button>
              </form>
              {/* <div className="mt-8 flex gap-3 items-center px-5 ">
                <p className="font-semibold  text-gray-600 items-center">
                  Follow us on
                </p>
                <div className="flex space-x-3 items-center">
                  <Link href="#" className="text-white hover:text-gray-200">
                    <LuFacebook className="h-5 w-5 bg-[#525252] p-1" />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-200 ">
                    <LuInstagram className="h-5 w-5 bg-[#525252] p-1" />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-200">
                    <LuX className="h-5 w-5 bg-[#525252] p-1" />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-200">
                    <LuLinkedin className="h-5 w-5 bg-[#525252] p-1" />
                  </Link>
                  <Link href="#" className="text-white hover:text-gray-200">
                    <LuYoutube className="h-5 w-5 bg-[#525252] p-1" />
                  </Link>
                </div>
              </div> */}

              <div className=" flex items-center gap-3 mt-5 ms-3 md:ms-0 lg:ms-0 xl:ms-0">
                <h3 className="mt-4 mb-2 text-lg font-bold font-heading text-gray-400">
                  Follow us on
                </h3>
                <div className="flex gap-2 md:gap-4">
                  <a href="#">
                    <LuFacebook className="p-1 rounded size-5 sm:size-6 bg-neutral-600 fill-neutral-100 stroke-none" />
                  </a>
                  <a href="#">
                    <LuInstagram className="p-1 rounded stroke-1 size-5 sm:size-6 bg-neutral-600 stroke-neutral-100" />
                  </a>
                  <a href="#">
                    <BsTwitterX className="p-1 rounded stroke-1 size-5 sm:size-6 bg-neutral-600 fill-neutral-100 stroke-none" />
                  </a>
                  <a href="#">
                    <LuLinkedin className="p-1 rounded stroke-1 size-5 sm:size-6 bg-neutral-600 fill-neutral-100 stroke-none " />
                  </a>
                  <a href="#">
                    <LuYoutube className="p-1 rounded stroke-1 size-5 sm:size-6 bg-neutral-600 stroke-neutral-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
