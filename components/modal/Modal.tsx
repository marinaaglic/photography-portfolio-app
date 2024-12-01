import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./modal.module.css";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import NavButton from "../reusable/NavButton";
import { imageVariants } from "../../utils/animationVariants";

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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setDirection(1);
        onNext();
      } else if (event.key === "ArrowLeft") {
        setDirection(-1);
        onPrev();
      } else if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onNext, onPrev, onClose]);

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
