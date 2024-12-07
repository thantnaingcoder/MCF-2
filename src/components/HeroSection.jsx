const HeroSection = ({ image, title }) => {
  return (
    <div className="relative h-56 md:h-[419px] lg:h-screen">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Blog Header"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative flex items-center justify-center h-full text-center ">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-3xl font-bold text-white font-heading md:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
