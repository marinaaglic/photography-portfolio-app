export function handleKeyboardNavigation({
  onNext,
  onPrev,
  onClose,
  setDirection,
}: {
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
  setDirection: (dir: number) => void;
}) {
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
}
