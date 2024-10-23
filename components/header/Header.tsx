"use client";

import React from "react";
import styles from "./header.module.css";
import { useTheme } from "../../app/providers/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>Photography Portfolio</li>
          <li className={styles.li}>Sunset Pictures</li>
          <li className={styles.li}>
            <button onClick={toggleTheme}>
              Switch to {theme === "light" ? "dark" : "light"} mode
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
