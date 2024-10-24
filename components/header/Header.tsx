"use client";

import React from "react";
import styles from "./header.module.css";
import { useTheme } from "../../app/providers/ThemeProvider";
import ThemeToggle from "../toggle/ThemeToggle";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>Photography Portfolio | Sunset Pictures</li>
          <li className={styles.li}>
            <ThemeToggle onToggle={toggleTheme} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
