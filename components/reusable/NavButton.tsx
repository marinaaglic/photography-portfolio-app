import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styles from "./navButton.module.css";

interface NavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

export default function NavButton({ direction, onClick }: NavButtonProps) {
  const Icon = direction === "left" ? GrFormPrevious : GrFormNext;
  return (
    <Icon
      className={`${styles.navButton} ${
        direction === "left" ? styles.left : styles.right
      }`}
      onClick={onClick}
    />
  );
}
