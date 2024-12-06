import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { LuFacebook, LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";

import { BsTwitterX } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import bgImg from "../../../assets/applyForm.png";

const ApplyFormPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Header */}

      {/* Form Section */}

      <div>
        <main className="container mx-auto px-4 py-8 max-w-3xl lg:mb-36 md:mb-0 mb-20">
          <h1 className="text-3xl font-bold text-center mb-8">
            School Application Form
          </h1>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-emerald-50"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Pick a date
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Gender</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Enter your address" />
            </div>

            <div className="space-y-2">
              <Label>Which course do you want to enroll in?</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business Strategy</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="webdesign">Web Design</SelectItem>
                  <SelectItem value="marketing">Digital Marketing</SelectItem>
                  <SelectItem value="content">Content Writing</SelectItem>
                  <SelectItem value="language">Language</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us a few words"
                className="min-h-[180px]"
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" className="px-8">
                Cancel
              </Button>
              <Link to={"/thank-you"}>
                <Button className="bg-emerald-500 hover:bg-emerald-600 px-8">
                  Submit
                </Button>
              </Link>
            </div>
          </form>

          {/* icons */}

          <div className=" flex items-center gap-3 mt-5">
            <h3 className="text-lg font-bold font-heading text-gray-400">
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
        </main>
      </div>
    </div>
  );
};

export default ApplyFormPage;
