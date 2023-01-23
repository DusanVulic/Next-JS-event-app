import React from "react";

// importing use router fron next
//import { useRouter } from "next/router";

//importing spinner from chakra
import { Spinner } from "@chakra-ui/react";

//function to get filtered event
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import DetailedEvent from "../../components/events/DetailedEvent";

const EventDetailPage = (props) => {
  const event = props.selectedEvent;

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

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};
export default EventDetailPage;
