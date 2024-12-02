import Star from "../../../assets/aboutUs/otherIcon/star.svg";
const InstructorList = ({
  instructor: { name, imageUrl, role, rating, description, specialized, icons },
}) => {
  return (
    <div className=" min-w-[300px] overflow-hidden  group border border-neutral-200 px-4 py-3 rounded-lg relative">
      <img src={imageUrl} alt="instructor" className="mb-5" />
      <div className="flex justify-between items-center mb-1 text-neutral-800">
        <p className="font-medium font-heading text-xl leading-5">{name}</p>
        <div className="flex items-center gap-1">
          <p className="text-neutral-800 font-medium text-xl leading-5 font-subheading ">
            {rating}
          </p>

          <img src={Star} alt="rating" />
        </div>
      </div>
      <p className="text-neutral-600  leading-6 "> {role} </p>
      <div className="group-hover:opacity-100 duration-500 pointer-events-none opacity-0  absolute left-0 bottom-0 w-full bg-neutral-100 px-3 space-y-2 py-5 ">
        <p className=" text-neutral-800">{description}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-primary-500 text-lg ">
            {specialized}
          </p>
          <ul className="flex items-center gap-2">
            {icons.map((icon, i) => (
              <li key={i}>
                <img src={icon} alt="social" className="size-5" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorList;
