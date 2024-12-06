const AchievementLists = ({ item: { iconUrl, number, name } }) => {
  return (
    <div className="flex items-center col-span-1 gap-3 px-10 py-5 sm:justify-start sm:px-14 lg:px-0 lg:justify-center bg-lighterBg">
      <img src={iconUrl} className="size-8" alt="achievement" />
      <div>
        <h1 className="text-2xl font-bold font-heading text-neutral-900 sm:text-3xl sm:leading-10 ">
          {number}
        </h1>
        <p className="text-base font-medium text-neutral-700 sm:text-xl text-nowrap">
          {name}
        </p>
      </div>
    </div>
  );
};

export default AchievementLists;
