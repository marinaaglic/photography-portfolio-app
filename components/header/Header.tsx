"use client";

import React from "react";
import styles from "./header.module.css";
import { useTheme } from "../../app/providers/ThemeProvider";
import ThemeToggle from "../toggle/ThemeToggle";
import Link from "next/link";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const headerStyle = theme === "dark" ? styles.headerDark : styles.headerLight;
  return (
    <header className={`${styles.header} ${headerStyle}`}>
      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>Photography Portfolio</li>
          <Link href="/about">About</Link>
          <li className={styles.li}>
            <ThemeToggle onToggle={toggleTheme} theme={theme} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
