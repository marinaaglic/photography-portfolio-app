import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./modal.module.css";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import NavButton from "../reusable/NavButton";
import { imageVariants } from "../../utils/imageVariants";
import { useSwipeNavigation } from "../../hooks/useSwipeNavigation";
import { handleKeyboardNavigation } from "../../utils/keyboardNavigation";

interface ModalProps {
  imageUrl: string;
  imageUrls: string[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  selectedIndex: number;
}

export default function Modal({
  imageUrl,
  imageUrls,
  onClose,
  onNext,
  onPrev,
  selectedIndex,
}: ModalProps) {
  const [direction, setDirection] = useState(1);
  const swipeHandlers = useSwipeNavigation({ onNext, onPrev, setDirection });

  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };

    const nextIndex = (selectedIndex + 1) % imageUrls.length;
    const prevIndex = (selectedIndex - 1 + imageUrls.length) % imageUrls.length;

    if (imageUrls[nextIndex]) {
      preloadImage(imageUrls[nextIndex]);
    }
    if (imageUrls[prevIndex]) {
      preloadImage(imageUrls[prevIndex]);
    }
  }, [selectedIndex, imageUrls]);

  useEffect(() => {
    return handleKeyboardNavigation({ onNext, onPrev, onClose, setDirection });
  }, [onNext, onPrev, onClose, setDirection]);

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
            <NavButton
              direction="left"
              onClick={() => {
                setDirection(-1);
                onPrev();
              }}
            />
            <NavButton
              direction="right"
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
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  quality={60}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
