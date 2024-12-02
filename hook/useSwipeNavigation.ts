import { useSwipeable } from "react-swipeable";

export const useSwipeNavigation = ({
  onNext,
  onPrev,
  setDirection,
}: {
  onNext: () => void;
  onPrev: () => void;
  setDirection: (dir: number) => void;
}) => {
  return useSwipeable({
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
};
