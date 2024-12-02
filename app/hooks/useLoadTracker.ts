import { useCallback, useEffect, useRef, useState } from "react";

export const useLoadTrackerWithUrls = ({ urls }: { urls: string[] }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, urls.length);
  }, [urls.length]);

  useEffect(() => {
    if (imagesLoaded === urls.length) {
      setIsLoaded(true);
    }
  }, [imagesLoaded, urls.length]);

  const getImageRef = useCallback(
    (index: number) => (element: HTMLImageElement | null) => {
      imageRefs.current[index] = element;
      // This handles the case where the image is already loaded from the cache and the onLoad event would never be fired
      if (element?.complete) {
        setImagesLoaded((prev) => Math.min(prev + 1, urls.length));
      }
    },
    [urls.length]
  );

  const handleImageLoad = useCallback(() => {
    setImagesLoaded((prev) => Math.min(prev + 1, urls.length));
  }, [urls.length]);

  return { isLoaded, getImageRef, handleImageLoad };
};
