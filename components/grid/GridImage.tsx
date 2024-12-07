"use client";

import { useState, useEffect } from "react";
import { getAllImageUrls } from "../../utils/firebaseService";
import Image from "next/image";
import styles from "./gridImage.module.css";
import { motion } from "framer-motion";
import Modal from "../modal/Modal";
import Loader from "../reusable/Loader";

export default function GridImage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [imageSpans, setImageSpans] = useState<
    { column: number; row: number }[]
  >([]);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        let storedImages = sessionStorage.getItem("imageUrls");

        if (storedImages) {
          const urls = JSON.parse(storedImages);
          setImageUrls(urls);
          const spans = urls.map(() => ({
            column: Math.random() < 0.5 ? 2 : 3,
            row: Math.random() < 0.5 ? 2 : 3,
          }));
          setImageSpans(spans);
        } else {
          const urls = await getAllImageUrls("");
          setImageUrls(urls);
          sessionStorage.setItem("imageUrls", JSON.stringify(urls));
        }
      } catch (error) {
        setError("Failed to fetch images. Please try again later.");
        console.log("An error occurred: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showModal]);

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

  if (isLoading) {
    return <Loader />;
  }

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
            gridColumn: `span ${imageSpans[index]?.column || 1}`,
            gridRow: `span ${imageSpans[index]?.row || 1}`,
          }}
        >
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            width={300}
            height={300}
            className={styles.image}
            priority={index < 2}
            onClick={() => {
              setShowModal(true);
              setSelectedIndex(index);
            }}
          />
        </motion.div>
      ))}
      {showModal && (
        <Modal
          imageUrl={imageUrls[selectedIndex]}
          imageUrls={imageUrls}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          selectedIndex={selectedIndex}
        />
      )}
    </div>
  );
}
