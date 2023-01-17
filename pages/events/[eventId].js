import React from "react";

// importing use router fron next
import { useRouter } from "next/router";

//function to get filtered event
import { getEventById } from "../../dummy-data-js";

const EventDetailPage = () => {
  const router = useRouter();

  console.log(router.query);

  const eventId = router.query.eventId;

  const detailedEvent = getEventById(eventId);

  console.log(detailedEvent);

  const { title, image, date, location, id, description } = detailedEvent;

  return (
    <div>
      <h3> {title}</h3>
      <p>{date}</p>
    </div>
  );
};

export default EventDetailPage;
