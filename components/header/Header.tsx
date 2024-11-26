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
      <nav className={styles.nav}>
        <ul className={styles.left}>
          <li className={styles.li}>
            <Link href="/" className={styles.homeLink}>
              Photography Portfolio
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.aboutLink}>
              About
            </Link>
          </li>
        </ul>
        <div className={styles.right}>
          <ThemeToggle onToggle={toggleTheme} theme={theme} />
        </div>
      </nav>
    </header>
  );
}
