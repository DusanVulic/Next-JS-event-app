import Link from "next/link";
import React from "react";

//styles
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          {" "}
          next events app
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/events" className={styles.navigationlink}>
              {" "}
              All events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
