import React from "react";
import styles from "./page.module.css";
import aboutData from "../../data/data.json";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.wrapper}>
        <span>{aboutData.title}</span>
        <span>{aboutData.introduction}</span>
        <span>{aboutData.body}</span>
        <span>{aboutData.conclusion}</span>
        <span>{aboutData.closing}</span>
      </div>
    </div>
  );
}
