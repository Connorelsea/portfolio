"use client";

import React, { useEffect, useState } from "react";
import Card, { CardColor } from "@/app/common/Card";
import { AnimatePresence, motion } from "framer-motion";
import FlexRow from "@/app/common/FlexRow";
import ImagePreloadWrapper from "@/app/common/ImagePreloadWrapper";

const BottomGlow = ({ keyName }: { keyName: string }) => {
  return (
    <motion.img
      key={keyName}
      draggable={false}
      src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
      alt="Code Editor"
      height={350}
      style={{
        position: "absolute",
        bottom: "-35px",
        zIndex: 1001,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.8, delay: 0 }}
    />
  );
};

const imageUrls = [
  "https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ",
  "https://utfs.io/f/IJo7F0AX1AKDkEYyz7ACKMU57T2bzdQjH90iAqIhGSJsPDcu",
  "https://utfs.io/f/IJo7F0AX1AKDLLANUQpE1IPvUkeXAxl2Qz60ZimGft4VKFwT",
];

const CodeEditor = () => {
  const [isFirstCardHovered, setIsFirstCardHovered] = useState(false);
  const [isSecondCardHovered, setIsSecondCardHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);
  const [hasCompletedIntro, setHasCompletedIntro] = useState(false);

  useEffect(() => {
    if (imagesLoaded && !startAnimations) {
      // Wait for cards to finish their entrance animations
      // Cards have stagger (0.15s * order) + spring animation (damping:12, takes ~1-1.5s)
      // Wait 1800ms to ensure all cards are fully settled before animating internals
      const timer = setTimeout(() => {
        setStartAnimations(true);
        // After intro, switch to faster hover physics
        setTimeout(() => setHasCompletedIntro(true), 1000);
      }, 300);
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
          color={CardColor.DARK}
          width={40}
          order={0}
          height={390}
          shouldAnimate={true}
          onMouseEnter={() => setIsFirstCardHovered(true)}
          onMouseLeave={() => setIsFirstCardHovered(false)}
        >
          <motion.img
            draggable={false}
            src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
            alt="Code Editor"
            height={350}
            style={{
              position: "absolute",
              bottom: "-35px",
              left: "25px",
              zIndex: 1001,
            }}
            initial={{
              opacity: 0,
              scale: 1,
            }}
            animate={
              startAnimations
                ? {
                    opacity: 1,
                    scale: 1.5,
                  }
                : {
                    opacity: 0,
                    scale: 1,
                  }
            }
            transition={{ duration: 1.4, delay: 2.2 }}
          />
          <motion.img
            draggable={false}
            src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
            alt="Code Editor"
            height={350}
            style={{
              position: "absolute",
              bottom: "-35px",
              left: "25px",
              zIndex: 1001,
            }}
            initial={{
              opacity: 0,
              scale: 1,
            }}
            animate={
              startAnimations
                ? {
                    opacity: 1,
                    scale: 1.5,
                  }
                : {
                    opacity: 0,
                    scale: 1,
                  }
            }
            transition={{ duration: 1.4, delay: 2.2 }}
          />
          <motion.img
            key="first-card-code-editor"
            draggable={false}
            src="https://utfs.io/f/IJo7F0AX1AKDkEYyz7ACKMU57T2bzdQjH90iAqIhGSJsPDcu"
            height={350}
            style={{
              position: "absolute",
              top: "25px",
              left: "25px",
              zIndex: 999,
            }}
            initial={{
              opacity: 0,
              scale: 0.4,
              rotateX: 30,
              rotateY: 20,
              filter: "blur(20px)",
            }}
            animate={
              startAnimations
                ? {
                    opacity: 1,
                    scale: isFirstCardHovered ? 0.9 : 1,
                    rotateX: isFirstCardHovered ? 10 : 0,
                    rotateY: isFirstCardHovered ? -12 : 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    scale: 0.4,
                    rotateX: 30,
                    rotateY: 20,
                    filter: "blur(20px)",
                  }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              mass: hasCompletedIntro ? 1 : 2,
              damping: hasCompletedIntro ? 7 : 20,
              duration: isFirstCardHovered ? 0.4 : 2,
            }}
          />
        </Card>
        <Card
          color={CardColor.DARK}
          width={60}
          order={1}
          height={390}
          shouldAnimate={true}
          onMouseEnter={() => setIsSecondCardHovered(true)}
          onMouseLeave={() => setIsSecondCardHovered(false)}
        >
          <AnimatePresence>
            {isSecondCardHovered && (
              <>
                <BottomGlow keyName="bottom-glow-on-hover-1" />
                <BottomGlow keyName="bottom-glow-on-hover-2" />

                <motion.img
                  draggable={false}
                  src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
                  alt="Code Editor"
                  height={350}
                  style={{
                    position: "absolute",
                    top: "-75px",
                    zIndex: 999,
                    transform: "rotate(180deg)",
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={
                    startAnimations
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        }
                  }
                  exit={{
                    opacity: 0,
                  }}
                  transition={{ duration: 1, delay: 0 }}
                />
                <motion.img
                  draggable={false}
                  src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
                  alt="Code Editor"
                  height={350}
                  style={{
                    position: "absolute",
                    top: "-75px",
                    zIndex: 999,
                    transform: "rotate(180deg)",
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={
                    startAnimations
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        }
                  }
                  exit={{
                    opacity: 0,
                  }}
                  transition={{ duration: 1, delay: 0 }}
                />
              </>
            )}
          </AnimatePresence>
          <motion.img
            draggable={false}
            src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
            alt="Code Editor"
            height={350}
            style={{
              position: "absolute",
              top: "-75px",
              zIndex: 999,
              transform: "rotate(180deg)",
            }}
            initial={{
              opacity: 0,
            }}
            animate={
              startAnimations
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  }
            }
            transition={{ duration: 1, delay: 0 }}
          />

          <motion.img
            draggable={false}
            src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
            alt="Code Editor"
            height={350}
            style={{
              position: "absolute",
              bottom: "-35px",
              zIndex: 1001,
            }}
            initial={{
              opacity: 0,
            }}
            animate={
              startAnimations
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  }
            }
            transition={{ duration: 0.8, delay: 1 }}
          />
          <motion.img
            draggable={false}
            src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
            alt="Code Editor"
            height={350}
            style={{
              position: "absolute",
              bottom: "-35px",
              zIndex: 1001,
            }}
            initial={{
              opacity: 0,
              scale: 1,
            }}
            animate={
              startAnimations
                ? {
                    opacity: 1,
                    scale: 1.5,
                  }
                : {
                    opacity: 0,
                    scale: 1,
                  }
            }
            transition={{ duration: 1.4, delay: 2.2 }}
          />
          <motion.img
            key="second-card-code-editor"
            draggable={false}
            src="https://utfs.io/f/IJo7F0AX1AKDLLANUQpE1IPvUkeXAxl2Qz60ZimGft4VKFwT"
            alt="Code Editor"
            height={500}
            style={{
              position: "absolute",
              zIndex: 1000,
              transform: "rotateX(30deg)",
              willChange: "transform",
            }}
            initial={{
              rotateX: 30,
              opacity: 0,
              filter: "blur(20px)",
              bottom: "40px",
              scale: 1,
            }}
            animate={
              startAnimations
                ? {
                    rotateX: 0,
                    rotateY: isSecondCardHovered ? -20 : 0,
                    x: isSecondCardHovered ? -200 : 0,
                    y: isSecondCardHovered ? 50 : 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: isSecondCardHovered ? 1 : 0.76,
                    bottom: "-60px",
                  }
                : {
                    rotateX: 30,
                    opacity: 0,
                    filter: "blur(20px)",
                    bottom: "40px",
                    scale: 1,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              mass: hasCompletedIntro ? 1 : 3,
              damping:
                isSecondCardHovered && hasCompletedIntro
                  ? 5 // speed up on hover
                  : hasCompletedIntro
                    ? 20 // medium speed on hover exit (no hover + complete intro)
                    : 35, // slow down on initial animation
              duration: isSecondCardHovered ? 0.55 : 2,
            }}
          />
          <AnimatePresence>
            {isSecondCardHovered && (
              <motion.img
                key="second-card-code-editor-blur-overlay"
                draggable={false}
                src="https://utfs.io/f/IJo7F0AX1AKDLLANUQpE1IPvUkeXAxl2Qz60ZimGft4VKFwT"
                alt="Code Editor"
                height={500}
                style={{
                  position: "absolute",
                  zIndex: 1000,
                  transform: "rotateX(30deg)",
                  willChange: "transform",
                }}
                initial={{
                  rotateX: 30,
                  opacity: 0,
                  filter: "blur(20px)",
                  bottom: "40px",
                  scale: 1,
                }}
                animate={
                  startAnimations
                    ? {
                        rotateX: -2,
                        rotateY: isSecondCardHovered ? -20 : 0,
                        x: isSecondCardHovered ? -200 : 0,
                        y: isSecondCardHovered ? 50 : 0,
                        opacity: 0.4,
                        filter: "blur(10px)",
                        scale: isSecondCardHovered ? 1 : 0.76,
                        bottom: "-60px",
                      }
                    : {
                        rotateX: 30,
                        opacity: 0,
                        filter: "blur(20px)",
                        bottom: "40px",
                        scale: 1,
                      }
                }
                exit={{
                  opacity: 0,
                  rotateX: 30,
                }}
                transition={{
                  duration: isSecondCardHovered ? 0.55 : 2,
                }}
              />
            )}
          </AnimatePresence>
        </Card>
      </FlexRow>
    </ImagePreloadWrapper>
  );
};

export default CodeEditor;
