// import funcion from dummy data

import { getFeaturedEvents } from "../helpers/api-util";

// importing react component
import EventList from "../components/events/EventList";

//importing styles
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};
