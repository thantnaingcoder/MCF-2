import { Fragment } from "react";
import Star from "../../../assets/aboutUs/otherIcon/star.svg";
import HalfStar from "../../../assets/aboutUs/otherIcon/halfstar.svg";

const StudentFeedbacklists = ({ profile, name, comments }) => {
  const rating = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div
      className={`select-none bg-lighterBg  duration-500  rounded-lg w-full sm:w-[400px] min-h-[220px] flex flex-col  justify-center items-start sm:items-center px-6 sm:px-0 `}
    >
      <div className={`flex items-center gap-5 mb-3 pt-10`}>
        <img src={profile} alt="profile" className={`size-12`} />

        <div className=" flex flex-col gap-1 items-center">
          <div className="flex items-center gap-1">
            {rating.map((_, i) => (
              <Fragment key={i}>
                {i === rating.length - 1 ? (
                  <img src={HalfStar} alt="halfstar" className={`size-3 `} />
                ) : (
                  <img src={Star} alt="star" className={`size-3`} />
                )}
              </Fragment>
            ))}
          </div>

          <h2
            className={`leading-6 font-heading font-semibold  text-neutral-800`}
          >
            {name}
          </h2>
        </div>
      </div>
      <p
        className={` leading-5 md:text-lg md:leading-[22px] xl:text-xl xl:leading-6 mb-auto px-0 md:px-8  text-center  text-neutral-500`}
      >
        {comments}
      </p>
    </div>
  );
};

export default StudentFeedbacklists;
