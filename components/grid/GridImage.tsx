"use client";

import { useState, useEffect } from "react";
import { getAllImageUrls } from "../../utils/firebaseService";
import Image from "next/image";
import styles from "./gridImage.module.css";
import { motion } from "framer-motion";
import Modal from "../modal/Modal";
import Loader from "../reusable/Loader";
import { useBodyClass } from "../../hooks/useBodyClass";
import ImageItem from "./ImageItem";

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
    if (imageUrls.length > 0) {
      const spans = imageUrls.map(() => ({
        column: Math.random() < 0.5 ? 2 : 3,
        row: Math.random() < 0.5 ? 2 : 3,
      }));
      setImageSpans(spans);
    }
  }, [imageUrls]);

  useBodyClass("no-scroll", showModal);

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
    return (
      <div>
        <Loader />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${isLoading ? "hidden" : ""}`}>
      {imageUrls.map((url, index) => (
        <ImageItem
          key={index}
          url={url}
          index={index}
          onClick={() => {
            setShowModal(true);
            setSelectedIndex(index);
          }}
          imageSpan={imageSpans[index]}
        />
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
