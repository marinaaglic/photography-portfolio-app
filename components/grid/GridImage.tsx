"use client";

import { useState, useEffect } from "react";
import { getAllImageUrls } from "../../utils/firebaseService";
import Image from "next/image";
import styles from "./gridImage.module.css";

export default function GridImage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

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

  return (
    <div className={styles.grid}>
      {imageUrls.map((url, index) => (
        <div key={index}>
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            width={300}
            height={300}
            loading="lazy"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}
