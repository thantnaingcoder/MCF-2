import EventSectionContainer from "./EventSectionContainer";

const EventSectionBlog = () => {
  return (
    <section className="px-5 mb-10 md:mb-15 lg:mb-20 xl:px-0">
      <h1 className="mb-5 text-xl font-semibold text-center md:mb-10 md:text-3xl lg:text-4xl font-heading text-neutral-900">
        Events and announcements
      </h1>
      <EventSectionContainer />
    </section>
  );
};

export default EventSectionBlog;
