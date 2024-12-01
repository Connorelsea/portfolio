import { useCallback, useEffect, useState } from "react";

export const useLoadTracker = ({ imageCount }: { imageCount: number }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const incrementImageCount = useCallback(() => {
    setImagesLoaded((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (imagesLoaded === imageCount) {
      setIsLoaded(true);
    }
  }, [imagesLoaded, imageCount]);

  return { isLoaded, incrementImageCount };
};
