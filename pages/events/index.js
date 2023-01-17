import React from "react";

//importing function to get all events
import { getAllEvents } from "../../dummy-data-js";

//importing componnents
import EventList from "./../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
const EventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventsSearch />
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
