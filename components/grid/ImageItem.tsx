import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./imageItem.module.css";

interface ImageItemProps {
  url: string;
  index: number;
  onClick: () => void;
  imageSpan: { column: number; row: number };
}

export default function ImageItem({
  url,
  index,
  onClick,
  imageSpan,
}: ImageItemProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "linear" }}
      viewport={{ once: false, amount: 0.5 }}
      style={{
        gridColumn: `span ${imageSpan?.column || 1}`,
        gridRow: `span ${imageSpan?.row || 1}`,
      }}
    >
      <Image
        src={url}
        alt={`Image ${index + 1}`}
        width={300}
        height={300}
        className={styles.image}
        priority={index < 2}
        onClick={onClick}
      />
    </motion.div>
  );
}
