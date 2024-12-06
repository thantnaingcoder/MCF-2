import { Input } from "@/components/ui/input";
const FormInput = ({ label, name, className, ...props }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="font-heading text-neutral-900  2xl:text-lg"
      >
        {label}
      </label>
      <Input
        {...props}
        name={name}
        className="py-4 xl:py-5 2xl:py-6 ps-5 focus-visible:ring-primary-400 "
      />
    </>
  );
};

export default FormInput;
