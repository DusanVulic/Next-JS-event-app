// import funcion from dummy data

import { getFeaturedEvents } from "../dummy-data-js";

// importing react component
import EventList from "../components/events/EventList";

//importing styles
import styles from "../styles/Home.module.css";

export default function Home() {
  const FeaturedEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={FeaturedEvents} />
    </div>
  );
}
