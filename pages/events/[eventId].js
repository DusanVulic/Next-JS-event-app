import React from "react";

// importing use router fron next
import { useRouter } from "next/router";

//importing spinner from chakra
import { Spinner } from "@chakra-ui/react";

//function to get filtered event
import { getEventById } from "../../dummy-data-js";
import DetailedEvent from "../../components/events/DetailedEvent";

const EventDetailPage = () => {
  const router = useRouter();

  console.log(router.query);

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  console.log(event);

  //const { title, image, date, location, id, description } = event;

  if (!event) {
    return (
      <div className="spinner">
        {" "}
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  return <DetailedEvent {...event} />;
};

export default EventDetailPage;
