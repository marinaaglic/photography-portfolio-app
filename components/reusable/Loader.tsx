import { motion } from "framer-motion";
import styles from "./loader.module.css";

export default function Loader() {
  const text = "L  o  a  d  i  n  g...".split(" ");
  return (
    <div className={styles.loader}>
      {text.map((letter, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: i / 10 }}
          key={i}
          className={styles.letter}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}
