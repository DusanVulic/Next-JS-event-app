import React from "react";

//importing function to get all events
import { getAllEvents } from "../../dummy-data-js";

//importing componnents
import EventList from "./../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";

///import router to programmatically navigate

import { useRouter } from "next/router";

const EventsPage = () => {
  const router = useRouter();

  const events = getAllEvents();

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

export default EventsPage;
