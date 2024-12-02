export const imageVariants = {
  initial: (direction: number) => ({ opacity: 0, x: direction * 100 }),
  animate: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: -direction * 100 }),
};
