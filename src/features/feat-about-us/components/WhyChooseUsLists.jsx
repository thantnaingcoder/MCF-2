const WhyChooseUsLists = ({ item: { iconUrl, title, description } }) => {
  return (
    <div className="flex flex-col items-center justify-center border rounded border-neutral-100">
      <div className="flex items-center justify-center mt-3 mb-3 rounded-full sm:mb-5 size-12 bg-primary-50">
        <img
          src={iconUrl}
          className="size-6 text-primary-500 "
          alt="choose us"
        />
      </div>
      <h2 className="w-full mb-2 text-sm font-semibold text-center sm:text-xl font-heading text-neutral-800 text-nowrap">
        {title}
      </h2>
      <div className="px-16 pb-5 mb-auto text-center md:px-5">
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsLists;
