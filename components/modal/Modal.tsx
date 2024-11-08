import React, { useState } from "react";
import Image from "next/image";
import styles from "./modal.module.css";
import { IoClose } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

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
  const [direction, setDirection] = useState(1);

  const imageVariants = {
    initial: (direction: number) => ({ opacity: 0, x: direction * 100 }),
    animate: { opacity: 1, x: 0 },
    exit: (direction: number) => ({ opacity: 0, x: -direction * 100 }),
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setDirection(1);
      onNext();
    },
    onSwipedRight: () => {
      setDirection(-1);
      onPrev();
    },
    preventScrollOnSwipe: true,
    trackMouse: false,
  });

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
        {...swipeHandlers}
      >
        <div className={styles.modalBox}>
          <IoClose onClick={onClose} className={styles.closeButton} />
          <div className={styles.imageContainer}>
            <GrFormPrevious
              className={`${styles.navButton} ${styles.left}`}
              onClick={() => {
                setDirection(-1);
                onPrev();
              }}
            />
            <GrFormNext
              className={`${styles.navButton} ${styles.right}`}
              onClick={() => {
                setDirection(1);
                onNext();
              }}
            />
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={imageUrl}
                className={styles.image}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={imageUrl}
                  alt={`${selectedIndex}`}
                  className={styles.image}
                  fill
                  sizes="(width: 100%)"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
