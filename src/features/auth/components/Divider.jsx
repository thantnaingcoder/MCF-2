const Divider = () => {
  return (
    <div className="relative mb-5 ">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-neutral-200"></div>
      </div>
      <div className="relative flex justify-center ">
        <span className="px-2 bg-white text-neutral-500 2xl:text-lg">
          or continue with
        </span>
      </div>
    </div>
  );
};

export default Divider;
