"use client";

import { CardColor } from "@/app/common/Card";
import Card from "@/app/common/Card";
import FlexRow from "@/app/common/FlexRow";
import ImagePreloadWrapper from "@/app/common/ImagePreloadWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const imageMap = {
  calendar:
    "https://42n8qyxrei.ufs.sh/f/IJo7F0AX1AKDFntfoGyjKl5IJrBVNg4YPzHtEec32by1Uao6",
};

const imageUrls = Object.values(imageMap);

const HomeGenFirstRow = () => {
  const HEIGHT_OVERALL = 400;

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);

  // Hover tracking
  const [isCalendarHovered, setIsCalendarHovered] = useState(false);

  useEffect(() => {
    if (imagesLoaded && !startAnimations) {
      // Wait for cards to become visible before starting image animations
      // Cards animate immediately, images wait for visibility
      const timer = setTimeout(() => {
        setStartAnimations(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded, startAnimations]);

  return (
    <ImagePreloadWrapper
      imageUrls={imageUrls}
      onLoadComplete={() => setImagesLoaded(true)}
    >
      <FlexRow>
        {/* Full width card */}
        <Card
          color={CardColor.DEEP_PURPLE}
          width={100}
          order={0}
          height={HEIGHT_OVERALL}
          shouldAnimate={true}
          onMouseEnter={() => setIsCalendarHovered(true)}
          onMouseLeave={() => setIsCalendarHovered(false)}
        >
          <motion.img
            draggable={false}
            src={imageMap.calendar}
            alt="HomeGen Calendar"
            height={390}
            style={{
              position: "absolute",
            }}
            initial={{
              y: 200,
              opacity: 0,
              rotateX: 30,
              scale: 0.7,
            }}
            animate={
              startAnimations
                ? {
                    y: isCalendarHovered ? 20 : 20,
                    x: isCalendarHovered ? -200 : 160,
                    rotateX: 0,
                    opacity: 1,
                    scale: isCalendarHovered ? 1.05 : 1,
                  }
                : {}
            }
            transition={{
              delay: 0,
              type: "spring",
              damping: 20,
              mass: 2,
            }}
          />
        </Card>
      </FlexRow>
    </ImagePreloadWrapper>
  );
};

export default HomeGenFirstRow;
