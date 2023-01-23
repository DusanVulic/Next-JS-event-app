import React from "react";

//importing css styles

import styles from "./EventItem.module.css";

// import button from ui component folder
import Button from "../ui/Button";

//import icons
import DateIcon from "./../icons/date-icon";
import AddressIcon from "./../icons/address-icon";
import ArrowRightIcon from "./../icons/arrow-right-icon";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //const formattedAddress = location.replace(",","\n");

  const exploreLink = `/events/${id}`;

  console.log(location);

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <div className={styles.actions}>
          {/* <Link href={exploreLink} className={styles.link}>
            EXPLORE THIS EVENT
          </Link> */}
          <Button link={exploreLink}>
            {" "}
            <span>EXPLORE THIS EVENT </span>{" "}
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>{" "}
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
