import React from "react";
import Image from "next/image";
import styles from "./modal.module.css";
import { IoClose } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

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
  const imageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };
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
            <AnimatePresence mode="wait">
              <motion.div
                key={imageUrl}
                className={styles.image}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={imageUrl}
                  priority
                  alt={`${selectedIndex}`}
                  className={styles.image}
                  fill
                  sizes="(width: 100%)"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
