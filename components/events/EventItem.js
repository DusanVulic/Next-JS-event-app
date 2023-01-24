import React from "react";

//importing css styles

import styles from "./EventItem.module.css";

// import button from ui component folder
import Button from "../ui/Button";

//import icons
import DateIcon from "./../icons/date-icon";
import AddressIcon from "./../icons/address-icon";
import ArrowRightIcon from "./../icons/arrow-right-icon";


//importing image component 

import Image from "next/image";


const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

 // console.log(location);

  return (
    <li className={styles.item}>
      <Image src={"/" + image} alt={title} width={260} height={160} />
      
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
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
