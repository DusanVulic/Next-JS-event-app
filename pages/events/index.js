import React from "react";

//importing function to get all events
import { getAllEvents } from "../../dummy-data-js";
import EventList from "./../../components/events/EventList";

const EventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <h2> all events page </h2>
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
