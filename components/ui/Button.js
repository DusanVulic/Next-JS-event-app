import React from "react";
import Link from "next/link";

import styles from "./Button.module.css";

const Button = (props) => {
  const { link, children } = props;

  return (
    <Link className={styles.btn} href={link}>
      {children}
    </Link>
  );
};

export default Button;
