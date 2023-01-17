import React from "react";

//import router
import { useRouter } from "next/router";

//importing spinner from chakra
import { Spinner } from "@chakra-ui/react";

//importing function
import { getFilteredEvents } from "../../dummy-data-js";
import EventList from "../../components/events/EventList";

const FilteredEvents = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  //console.log(filterData);

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
    return <p>invalid filter,please adjust your search values </p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  //console.log(filteredEvents);
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <p>
        no events found for that search criteria, please adjust your search
        values{" "}
      </p>
    );
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
