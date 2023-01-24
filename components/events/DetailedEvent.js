import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

//importing styles

import styles from "./DetailedEvent.module.css";

const DetailedEvent = ({ title, image, date, location, id, description }) => {
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <>
      <div className={styles.container}>
        <h3>{title}</h3>
        <p>{readableDate} </p>
        <Image src={"/" + image} alt={title} width={500} height={500} />

        <p> {formattedAddress}</p>
        <p>{description}</p>
      </div>
      <div className={styles.actions}>
        <Button link={"/"}>go back home</Button>
      </div>
    </>
  );
};

export default DetailedEvent;
