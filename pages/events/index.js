import React from "react";

//importing function to get all events
import { getAllEvents } from "../../dummy-data-js";

const EventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <h2> all events page </h2>
    </div>
  );
};

export default EventsPage;
