import { LucideCheck } from "lucide-react";

const TermAndConditionList = ({ id, title, description }) => {
  return (
    <>
      <h1 className="text-base font-bold leading-6 md:tex-lg lg:text-xl 2xl:text-2xl font-heading text-neutral-900">
        {id}. {title}
      </h1>
      <div className="text-sm leading-7 md:text-base lg:text-lg 2xl:text-xl text-neutral-600 ">
        {id === 12 ? (
          <div className="flex flex-col">
            <p>{description}</p>
            <p className="px-5 "> Email: Pathway67@gmail.com</p>
            <p className="px-5"> Phone: +1 (555) 123-4567</p>
          </div>
        ) : (
          description
        )}
      </div>
    </>
  );
};

export default TermAndConditionList;
