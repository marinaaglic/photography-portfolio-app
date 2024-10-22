import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>Photography Portfolio</li>
          <li className={styles.li}>Sunset Pictures</li>
        </ul>
      </nav>
    </header>
  );
}
