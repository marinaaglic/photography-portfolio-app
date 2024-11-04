import React from "react";
import Image from "next/image";
import styles from "./modal.module.css";
import { IoClose } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  selectedIndex: number;
}

export default function Modal({
  imageUrl,
  onClose,
  onNext,
  onPrev,
  selectedIndex,
}: ModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalBox}>
          <IoClose onClick={onClose} className={styles.closeButton} />
          <div className={styles.imageContainer}>
            <GrFormPrevious
              className={`${styles.navButton} ${styles.left}`}
              onClick={onPrev}
            />
            <GrFormNext
              className={`${styles.navButton} ${styles.right}`}
              onClick={onNext}
            />
            <Image
              src={imageUrl}
              priority
              alt={`${selectedIndex}`}
              className={styles.image}
              fill
              sizes="(width: 100%)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
