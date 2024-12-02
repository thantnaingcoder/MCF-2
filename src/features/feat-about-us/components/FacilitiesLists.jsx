const FacilitiesLists = ({ facility: { iconUrl, title, description } }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <div className="flex items-center gap-1">
        <img src={iconUrl} className="size-4" alt="checker" />
        <h2 className="font-subheading text-neutral-800 leading-4 sm:leading-6  font-semibold ">
          {title}
        </h2>
      </div>
      <p className="leading-5 sm:text-xl sm:leading-8  text-neutral-500">
        {description}
      </p>
    </div>
  );
};

export default FacilitiesLists;
