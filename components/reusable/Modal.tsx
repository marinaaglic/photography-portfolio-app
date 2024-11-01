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
    <div className={styles.modalOverlay} onClick={(e) => e.stopPropagation()}>
      <div className={styles.modalContainer}>
        <div className={styles.modalBox}>
          <div className={styles.modalHeader}>
            <IoClose onClick={onClose} className={styles.closeButton} />
          </div>
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
              width={600}
              height={600}
              alt="Selected image"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
