"use client";

import { CardColor } from "@/app/common/Card";
import Card from "@/app/common/Card";
import FlexRow from "@/app/common/FlexRow";
import ImagePreloadWrapper from "@/app/common/ImagePreloadWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const imageUrls = [
  "https://utfs.io/f/IJo7F0AX1AKDXM1Dd5xWZg1qOBjK93oUQkxirpMhPfuz7TID",
  "https://utfs.io/f/IJo7F0AX1AKDAHh9sSBoF4pSKGxn1UTsuePVZgCth5mrQDX8",
  "https://utfs.io/f/IJo7F0AX1AKD5dkHlX0fqLwGPtRU0hAKjd1ry5WXs4HubD8k",
];

const FirstRow = () => {
  const HEIGHT_OVERALL = 530;
  const SECONDARY_CARD_HEIGHT = 220;

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);

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
        <Card
          color={CardColor.ORANGE}
          width={60}
          order={0}
          height={HEIGHT_OVERALL}
          shouldAnimate={true}
        >
          <motion.img
            draggable={false}
            src="https://utfs.io/f/IJo7F0AX1AKD5dkHlX0fqLwGPtRU0hAKjd1ry5WXs4HubD8k"
            alt="Code Editor"
            height={650}
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
                    y: -30,
                    x: -20,
                    rotateX: 0,
                    opacity: 1,
                    scale: 0.8,
                  }
                : {
                    y: 200,
                    opacity: 0,
                    rotateX: 30,
                    scale: 0.7,
                  }
            }
            transition={{ delay: 0, type: "spring", damping: 20, mass: 2 }}
          />
        </Card>
        <Card
          color={CardColor.BLANK}
          width={40}
          order={1}
          height={HEIGHT_OVERALL}
          overflow
          flex="column"
          gap={30}
          shouldAnimate={true}
        >
          <Card
            color={CardColor.ORANGE}
            width={40}
            order={0}
            height={SECONDARY_CARD_HEIGHT}
            fullWidth
            shouldAnimate={true}
          >
            <motion.img
              draggable={false}
              src="https://utfs.io/f/IJo7F0AX1AKDXM1Dd5xWZg1qOBjK93oUQkxirpMhPfuz7TID"
              alt="Code Editor"
              height={100}
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
                      y: 55,
                      rotateX: 0,
                      opacity: 1,
                      scale: 1.5,
                    }
                  : {
                      y: 200,
                      opacity: 0,
                      rotateX: 30,
                      scale: 0.7,
                    }
              }
              transition={{ delay: 0, type: "spring", damping: 20, mass: 2 }}
            />
          </Card>
          <Card
            color={CardColor.ORANGE}
            width={40}
            order={0}
            height={HEIGHT_OVERALL - SECONDARY_CARD_HEIGHT - 30}
            fullWidth
            shouldAnimate={true}
          >
            <motion.img
              key="agent-button-group"
              draggable={false}
              src="https://utfs.io/f/IJo7F0AX1AKDAHh9sSBoF4pSKGxn1UTsuePVZgCth5mrQDX8"
              alt="Agent Art colorful button group"
              height={325}
              style={{
                position: "absolute",
              }}
              initial={{
                y: 10,
                opacity: 0,
                rotateX: 30,
                scale: 0.3,
              }}
              animate={
                startAnimations
                  ? {
                      y: 5,
                      rotateX: 0,
                      opacity: 1,
                      scale: 1.15,
                    }
                  : {
                      y: 10,
                      opacity: 0,
                      rotateX: 30,
                      scale: 0.3,
                    }
              }
              transition={{ delay: 0, type: "spring", damping: 20, mass: 2 }}
            />
          </Card>
        </Card>
      </FlexRow>
    </ImagePreloadWrapper>
  );
};

export default FirstRow;
