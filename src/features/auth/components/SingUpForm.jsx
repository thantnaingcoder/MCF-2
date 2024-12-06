import SignIn from "../../../assets/Login/Login.png";
import Logo from "../../../assets/logo.svg";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Divider from "./Divider";
import SocialButton from "./SocialButton";
import Google from "../../../assets/Login/google-logo.png";
import Facebook from "../../../assets/Login/facebook.png";
import Apple from "../../../assets/Login/apple.png";

const SignUpForm = () => {
  return (
    <div className="w-full h-full flex md:gap-10 xl:gap-0  ">
      <div className="hidden md:block md:w-[43%] lg:w-[45%] md:h-[700px] xl:min-h-screen   min-[1280px]:h-[760px] ">
        <img
          src={SignIn}
          alt="SignIn"
          className="w-full h-full object-cover object-center "
        />
      </div>
      <div className="mt-3 xl:mt-5  w-full md:px-0 px-5 md:w-1/2 lg:w-2/5 xl:w-2/3  xl:max-w-md xl:m-auto 2xl:m-auto ">
        <img src={Logo} alt="logo" className="mb-5  mx-auto md:mx-0 " />
        <h1 className="text-neutral-900 font-bold text-xl text-center md:text-start md:text-3xl 2xl:text-4xl font-heading">
          Create an Account
        </h1>
        <div className="text-nowrap text-sm md:text-base  flex items-center justify-center md:justify-start gap-2 font-heading text-neutral-600 mb-5 ">
          <p className="2xl:text-lg ">I already have an account</p>
          <Link
            to="/signin"
            className=" 2xl:text-lg underline hover:text-primary-500  duration-300"
          >
            Sign In
          </Link>
        </div>

        <form className="flex flex-col gap-3 2xl:gap-5 mb-5 ">
          <div className="mb-0 sm:mb-2 ">
            <FormInput
              label="Name"
              name="name"
              type="text"
              placeholder="clerk"
            />
          </div>
          <div className="mb-2 ">
            <FormInput
              label="Phone"
              name="phone"
              type="number"
              placeholder="09...."
            />
          </div>
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
          <div className="flex justify-between items-center mb-3 md:mb-5 ">
            <div className="flex gap-2 sm:gap-3 items-center">
              <input type="checkbox" name="check" id="check" />
              <label
                htmlFor="check"
                className="sm:text-base text-sm  text-neutral-900 font-heading select-none"
              >
                Save Password
              </label>
            </div>

            <button className="sm:text-base text-sm text-nowrap  text-neutral-900 font-heading hover:underline">
              Forgot password?
            </button>
          </div>
          <Button
            type="submit"
            className=" py-4 xl:py-5 2xl:py-6 bg-primary-500 hover:bg-primary-600 duration-300 font-heading 2xl:text-lg"
          >
            Create Account
          </Button>
        </form>
        <Divider />

        <div className="grid grid-cols-3 gap-2 sm:gap-5 pb-5">
          <SocialButton iconUrl={Google} name={"Google"} />
          <SocialButton iconUrl={Facebook} name={"Facebook"} />
          <SocialButton iconUrl={Apple} name={"Apple"} />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
