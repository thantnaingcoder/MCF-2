const AchievementLists = ({ item: { iconUrl, number, name } }) => {
  return (
    <div className=" sm:justify-start  px-10 sm:px-14 lg:px-0 lg:justify-center col-span-1 flex gap-3 items-center bg-primary-50 py-5">
      <img src={iconUrl} className="size-8" alt="achievement" />
      <div>
        <h1 className="font-heading font-bold text-neutral-900 text-2xl sm:text-3xl sm:leading-10 ">
          {number}
        </h1>
        <p className="text-neutral-700 font-medium text-base sm:text-xl text-nowrap">
          {name}
        </p>
      </div>
    </div>
  );
};

export default AchievementLists;
