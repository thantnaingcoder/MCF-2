import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { LuFacebook, LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";

import { BsTwitterX } from "react-icons/bs";

const ThankPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <div className="flex justify-center mb-8">
          <div className="rounded-full bg-emerald-500 p-8">
            <Check className="h-12 w-12 text-white" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-emerald-500 mb-6">Thank You</h1>

        <p className="text-gray-600 text-lg mb-8">
          Thank you for submitting your application to our Pathway Academy
          Education. We will be touch and contact you soon.
        </p>

        <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
          <Link to={"/"}>Back Home Page</Link>
        </Button>
        {/* icons */}
        <div className=" flex items-center justify-center gap-3 mt-5">
          <div>
            <h3 className="mt-4 mb-2 text-lg font-bold font-heading text-gray-400">
              Follow us on
            </h3>
          </div>
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
      </main>
    </div>
  );
};

export default ThankPage;
