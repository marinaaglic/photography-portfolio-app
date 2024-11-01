"use client";

import { useState, useEffect } from "react";
import { getAllImageUrls } from "../../utils/firebaseService";
import Image, { ImageProps } from "next/image";
import styles from "./gridImage.module.css";
import { motion } from "framer-motion";
import Modal from "../reusable/Modal";

export default function GridImage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = await getAllImageUrls("");
        setImageUrls(urls);
      } catch (error) {
        console.log("An error occurred: ", error);
      }
    };
    fetchImages();
  }, []);

  const getRandomSpan = () => {
    const spans = [2, 3];
    return spans[Math.floor(Math.random() * spans.length)];
  };

  const handleNext = () => {
    const prevIndex =
      selectedIndex === imageUrls.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(prevIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      selectedIndex === 0 ? imageUrls.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      {imageUrls.map((url, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          viewport={{ once: false, amount: 0.5 }}
          style={{
            gridColumn: `span ${getRandomSpan()}`,
            gridRow: `span ${getRandomSpan()}`,
          }}
        >
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            width={300}
            height={300}
            loading="lazy"
            className={styles.image}
            onClick={() => setShowModal(true)}
          />
        </motion.div>
      ))}
      {showModal && (
        <Modal
          imageUrl={imageUrls[selectedIndex]}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
}
