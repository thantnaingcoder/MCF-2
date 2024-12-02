import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuX,
  LuYoutube,
} from "react-icons/lu";

const ThankYouFormPage = () => {
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

        <div className="mt-16">
          <p className="text-gray-600 mb-4">Follow us on</p>
          <div className="flex space-x-3 items-center justify-center">
            <Link href="#" className="text-white hover:text-gray-900">
              <LuFacebook className="h-5 w-5 bg-[#525252] p-1" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-900 ">
              <LuInstagram className="h-5 w-5 bg-[#525252] p-1" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-900">
              <LuX className="h-5 w-5 bg-[#525252] p-1" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-900">
              <LuLinkedin className="h-5 w-5 bg-[#525252] p-1" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-900">
              <LuYoutube className="h-5 w-5 bg-[#525252] p-1" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYouFormPage;
