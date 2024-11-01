import React, { ReactElement } from "react";
import Image, { ImageProps } from "next/image";
import styles from "./modal.module.css";

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
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalBox}>
          <div className={styles.modalHeader}>
            <button onClick={onClose}></button>
          </div>
          <div className={styles.imageContainer}>
            <button
              className={`${styles.navButton} ${styles.left}`}
              onClick={onPrev}
            >
              &lt;
            </button>
            <button
              className={`${styles.navButton} ${styles.right}`}
              onClick={onNext}
            >
              &gt;
            </button>
            <div className={styles.imageIndex}>
              <span>{`Image ${selectedIndex + 1}`}</span>
            </div>
            <Image
              src={imageUrl}
              alt="Selected image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
