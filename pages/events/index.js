import React from "react";

//importing function to get all events
import { getAllEvents } from "../../helpers/api-util";

//importing componnents
import EventList from "./../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

///import router to programmatically navigate

import { useRouter } from "next/router";

const EventsPage = (props) => {
  const router = useRouter();

  const { events } = props;

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
      revalidate: 60,
    },
  };
};

export default EventsPage;
