import { Button } from "@/components/ui/button";

const SocialButton = ({ iconUrl, name }) => {
  return (
    <Button
      variant="outline"
      className="text-xs sm:text-sm lg:text-base 2xl:text-lg  font-heading py-3.5  xl:py-6 inline-flex items-center justify-center "
    >
      <img src={iconUrl} alt={name} className="size-3 sm:size-4 lg:size-5 " />
      <p> {name} </p>
    </Button>
  );
};

export default SocialButton;
