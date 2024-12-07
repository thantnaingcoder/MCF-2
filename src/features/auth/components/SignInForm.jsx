import SignIn from "../../../assets/Login/AuthImg.png";
import Logo from "../../../assets/logo.svg";
import FormInput from "./FormInput";
import Google from "../../../assets/Login/google-logo.png";
import Facebook from "../../../assets/Login/facebook.png";
import Apple from "../../../assets/Login/apple.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import SocialButton from "./SocialButton";
import Divider from "./Divider";

const SignInForm = () => {
  return (
    <div className="h-screen">
      <div className="flex w-full h-full md:gap-10 xl:gap-0 ">
        <div className="hidden md:block md:w-[43%] lg:w-[45%] md:h-[545px] xl:h-full">
          <img
            src={SignIn}
            alt="SignIn"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="w-full px-5 mt-3 xl:mt-14 md:px-0 md:w-1/2 lg:w-2/5 xl:w-2/3 xl:max-w-md xl:m-auto 2xl:m-auto ">
          <Link to="/">
            <img src={Logo} alt="logo" className="mx-auto mb-5 md:mx-0 " />
          </Link>
          <h1 className="text-xl font-bold text-center text-neutral-900 md:text-start md:text-3xl 2xl:text-4xl font-heading">
            Welcome Back
          </h1>
          <div className="flex items-center justify-center gap-2 mb-5 text-sm text-nowrap md:text-base md:justify-start font-heading text-neutral-600 ">
            <p className="2xl:text-lg ">Don’t have an account?</p>
            <Link
              to="/signup"
              className="underline duration-300 2xl:text-lg hover:text-primary-500"
            >
              Create an account
            </Link>
          </div>

          <form className="flex flex-col gap-5 mb-5">
            <div className="mb-0 sm:mb-2 ">
              <FormInput
                label="Email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-2 ">
              <FormInput label="Password" name="password" type="password" />
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2 sm:gap-3">
                <input type="checkbox" name="check" id="check" />
                <label
                  htmlFor="check"
                  className="text-sm select-none sm:text-base text-neutral-900 font-heading"
                >
                  Remember for 30 days
                </label>
              </div>

              <button className="text-sm sm:text-base text-nowrap text-neutral-900 font-heading hover:underline">
                Forgot password?
              </button>
            </div>
            <Button
              type="submit"
              className="py-4 duration-300  xl:py-5 2xl:py-6 2xl:text-lg bg-primary-500 hover:bg-primary-600 font-heading"
            >
              Sign In
            </Button>
          </form>

          <Divider />

          <div className="grid grid-cols-3 gap-2 sm:gap-5">
            <SocialButton iconUrl={Google} name={"Google"} />
            <SocialButton iconUrl={Facebook} name={"Facebook"} />
            <SocialButton iconUrl={Apple} name={"Apple"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
