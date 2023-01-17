import React from "react";

// importing use router fron next
import { useRouter } from "next/router";

//function to get filtered event
import { getEventById } from "../../dummy-data-js";
import DetailedEvent from "../../components/events/DetailedEvent";

const EventDetailPage = () => {
  const router = useRouter();

  console.log(router.query);

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  console.log(event);

  const { title, image, date, location, id, description } = event;

  if (!event) {
    return <div> no event found</div>;
  }

  return <DetailedEvent {...event} />;
};

export default EventDetailPage;
