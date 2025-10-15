"use client";

import React, { useState, useEffect } from "react";

interface ImagePreloadWrapperProps {
  imageUrls: string[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onLoadComplete?: () => void;
}

const ImagePreloadWrapper: React.FC<ImagePreloadWrapperProps> = ({
  imageUrls,
  children,
  fallback = null,
  onLoadComplete,
}) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  // const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    // Get unique URLs to avoid loading duplicates
    const uniqueUrls = Array.from(new Set(imageUrls));
    let loadedImages = 0;

    const imageElements: HTMLImageElement[] = [];

    uniqueUrls.forEach((url) => {
      const img = new Image();

      img.onload = () => {
        loadedImages++;
        // setLoadedCount(loadedImages);

        if (loadedImages === uniqueUrls.length) {
          setAllImagesLoaded(true);
          onLoadComplete?.();
        }
      };

      img.onerror = () => {
        console.warn(`Failed to load image: ${url}`);
        loadedImages++;
        // setLoadedCount(loadedImages);

        if (loadedImages === uniqueUrls.length) {
          setAllImagesLoaded(true);
          onLoadComplete?.();
        }
      };

      img.src = url;
      imageElements.push(img);
    });

    // Cleanup
    return () => {
      imageElements.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  if (!allImagesLoaded) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default ImagePreloadWrapper;
