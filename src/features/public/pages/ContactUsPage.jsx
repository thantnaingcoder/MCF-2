import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import herocontact from "../../../assets/contact-us/heroSection.png";
import askPhoto from "../../../assets/faq/ask.png";
import { Link } from "react-router-dom";

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
import PageLayout from "../components/PageLayout";



const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={herocontact}
            alt="contact us"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-white relative z-10">
          Contact us
        </h1>
      </section>

      {/* Contact Information Section */}
      <section className=" py-5 md:py-16 px-4 md:px-6 lg:px-8 lg:mt-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          We're here to Help You
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              title: "Customer Support",
              address:
                "789 Pine Drive, Apt 3B Greenwood, NY 10920 United States",
              phone: "+1 (800) 123-4567",
              email: "Pathway67@gmail.com",
            },
            {
              title: "Contact Address",
              address: "P.O. Box 3456 Ocean City, FL 33121 United States",
              phone: "+1 (415) 987-6543",
              email: "Pathway67@gmail.com",
            },
            {
              title: "Main Office Address",
              address: "Suite 200 Rivertown, CA 90210 United States",
              phone: "+1 (555) 123-4567",
              email: "Pathway67@gmail.com",
            },
          ].map((info, index) => (
            <Card key={index} className="bg-[#effaf4] hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{info.title}</h3>
                <div className="space-y-3 text-sm">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                    <span>{info.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-emerald-500" />
                    <span>{info.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-emerald-500" />
                    <span>{info.email}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
       <section className=" mb:py-16 mb:mt-10 mb:mb-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 justify-center items-center text-center">
            Get In Touch
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
                <Textarea placeholder="Type a question" className=" mb-7" rows={6} />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600 px-5 justify-center py-2.5 items-center"
                >
                  Send message <Send />
                </Button>
              </form>
               <div className=" flex items-center gap-5 mt-5 lg:ms-0 ms-5 md:ms-0">
                <h3 className="text-md font-bold font-heading text-gray-500">
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

      {/* Map Section */}
     <PageLayout>
     <section className="h-[400px] w-auto mt-10 md:mt-16 mb-28 md:mb-60  ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2d-122.1234567!3d37.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDA3JzM0LjQiTiAxMjLCsDA3JzM0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
     </PageLayout>
    </div>
  );
};

export default ContactUsPage;
