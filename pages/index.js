// import funcion from dummy data

import { getFeaturedEvents } from "../helpers/api-util";

// importing react component
import EventList from "../components/events/EventList";

//importing styles
import styles from "../styles/Home.module.css";

/// importing head component
import Head from "next/head";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title> Next js events </title>
        <meta
          name="description"
          content="find a lot events that allow you to evelve as developer....."
        />
      </Head>
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
