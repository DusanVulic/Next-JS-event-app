// import funcion from dummy data
import { getFeaturedEvents } from "../dummy-data-js";

//importing styles
import styles from "../styles/Home.module.css";

export default function Home() {
  const FeaturedEvents = getFeaturedEvents();

  return (
    <div>
      <h2>The Home page</h2>
      <ul></ul>
    </div>
  );
}
