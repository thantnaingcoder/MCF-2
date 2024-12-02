import Event1 from "../../../assets/Blog/events/event-1.png";
import Event2 from "../../../assets/Blog/events/event-2.png";
import Event3 from "../../../assets/Blog/events/event-3.png";
import EventSectionList from "../components/EventSectionList";
import PageLayout from "../../public/components/PageLayout";
import { events } from "../constant/event";

const EventSectionContainer = () => {
  return (
    <>
      <PageLayout>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 ">
          {events.map((event, index) => (
            <EventSectionList key={index} {...event} />
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default EventSectionContainer;
