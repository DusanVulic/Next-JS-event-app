import React from "react";

//import router
import { useRouter } from "next/router";

//importing spinner from chakra
import { Spinner } from "@chakra-ui/react";

// import button from ui component folder
import Button from "../../components/ui/Button";
//importing function
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/EventList";

///importing HEAD
import Head from "next/head";

const FilteredEvents = (props) => {
  const router = useRouter();

  const filterData = router.query.slug;

  console.log(filterData);

  if (!filterData) {
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

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (props.hasError) {
    return (
      <div>
        <p>invalid filter,please adjust your search values </p>;
        <Button link={"/events"}>go back to all events page </Button>
      </div>
    );
  }

  const filteredEvents = props.events;

  //console.log(filteredEvents);
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div>
        <p>
          no events found for that search criteria, please adjust your search
          values{" "}
        </p>
        <Button link={"/events"}>go back to all events page </Button>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Filtered events </title>
        <meta
          name="description"
          content={`all events for ${filterData[1]} / ${filterData[0]}`}
        />
      </Head>

      <EventList items={filteredEvents} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
    },
  };
};

export default FilteredEvents;
