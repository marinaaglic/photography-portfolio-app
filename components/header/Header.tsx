import React from "react";
import styles from "./header.module.css";
import ThemeSwitcher from "../../app/themeProvider/ThemeSwitcher";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>Photography Portfolio</li>
          <li className={styles.li}>Sunset Pictures</li>
          <ThemeSwitcher />
        </ul>
      </nav>
    </header>
  );
}
