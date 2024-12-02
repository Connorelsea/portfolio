"use client";

import React, { useEffect, useState } from "react";
import Card, { CardColor } from "@/app/common/Card";
import { AnimatePresence, motion } from "framer-motion";
import FlexRow from "@/app/common/FlexRow";
import { useLoadTrackerWithUrls } from "@/app/hooks/useLoadTracker";

const CodeEditor = () => {
  const { isLoaded, getImageRef, handleImageLoad } = useLoadTrackerWithUrls({
    urls: [
      "https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ",
      "https://utfs.io/f/IJo7F0AX1AKDkEYyz7ACKMU57T2bzdQjH90iAqIhGSJsPDcu",
      "https://utfs.io/f/IJo7F0AX1AKDLLANUQpE1IPvUkeXAxl2Qz60ZimGft4VKFwT",
      "https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ",
      "https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ",
      "https://utfs.io/f/IJo7F0AX1AKDLLANUQpE1IPvUkeXAxl2Qz60ZimGft4VKFwT",
    ],
  });

  const [isFirstCardHovered, setIsFirstCardHovered] = useState(false);
  const [isSecondCardHovered, setIsSecondCardHovered] = useState(false);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // ensure that first load of image (which is a bit after mounting) has the main extra delay
    // the extra delay is added to allow for attention on the first row animations
    setTimeout(() => {
      setHasMounted(true);
    }, 1000);
  }, []);

  const extraDelay = hasMounted ? 0 : 3;

  return (
    <FlexRow>
      <Card
        color={CardColor.DARK}
        width={40}
        order={4}
        height={390}
        onMouseEnter={() => {
          console.log("HOVERING");
          setIsFirstCardHovered(true);
        }}
        onMouseLeave={() => {
          console.log("LEAVING");
          setIsFirstCardHovered(false);
        }}
      >
        <motion.img
          draggable={false}
          src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
          alt="Code Editor"
          ref={getImageRef(0)}
          height={350}
          style={{
            position: "absolute",
            bottom: "-35px",
            left: "25px",
            zIndex: 1001,
          }}
          onLoad={handleImageLoad}
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={
            isLoaded && {
              opacity: 1,
              scale: 1.5,
            }
          }
          transition={{ duration: 1.4, delay: 2.2 + extraDelay }}
        />
        <motion.img
          draggable={false}
          src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
          alt="Code Editor"
          ref={getImageRef(0)}
          height={350}
          style={{
            position: "absolute",
            bottom: "-35px",
            left: "25px",
            zIndex: 1001,
          }}
          onLoad={handleImageLoad}
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={
            isLoaded && {
              opacity: 1,
              scale: 1.5,
            }
          }
          transition={{ duration: 1.4, delay: 2.2 + extraDelay }}
        />
        <motion.img
          key="first-card-code-editor"
          draggable={false}
          src="https://utfs.io/f/IJo7F0AX1AKDkEYyz7ACKMU57T2bzdQjH90iAqIhGSJsPDcu"
          height={350}
          ref={getImageRef(1)}
          onLoad={handleImageLoad}
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
          animate={{
            opacity: 1,
            scale: isFirstCardHovered ? 0.9 : 1,
            rotateX: isFirstCardHovered ? 10 : 0,
            rotateY: isFirstCardHovered ? -12 : 0,
            filter: "blur(0px)",
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            mass: hasMounted ? 1 : 2,
            damping: hasMounted ? 7 : 20,
            duration: isFirstCardHovered ? 0.4 : 2,
            delay: isFirstCardHovered ? 0 : extraDelay,
          }}
        />
      </Card>
      <Card
        color={CardColor.DARK}
        width={60}
        order={5}
        height={390}
        onMouseEnter={() => setIsSecondCardHovered(true)}
        onMouseLeave={() => setIsSecondCardHovered(false)}
      >
        <AnimatePresence>
          {isSecondCardHovered && (
            <>
              <motion.img
                draggable={false}
                src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
                alt="Code Editor"
                height={350}
                ref={getImageRef(2)}
                style={{
                  position: "absolute",
                  top: "-75px",
                  zIndex: 999,
                  transform: "rotate(180deg)",
                }}
                onLoad={handleImageLoad}
                initial={{
                  opacity: 0,
                }}
                animate={
                  isLoaded && {
                    opacity: 1,
                  }
                }
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 1, delay: 0 + extraDelay }}
              />
              <motion.img
                draggable={false}
                src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
                alt="Code Editor"
                height={350}
                ref={getImageRef(2)}
                style={{
                  position: "absolute",
                  top: "-75px",
                  zIndex: 999,
                  transform: "rotate(180deg)",
                }}
                onLoad={handleImageLoad}
                initial={{
                  opacity: 0,
                }}
                animate={
                  isLoaded && {
                    opacity: 1,
                  }
                }
                exit={{
                  opacity: 0,
                }}
                transition={{ duration: 1, delay: 0 + extraDelay }}
              />
            </>
          )}
        </AnimatePresence>
        <motion.img
          draggable={false}
          src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
          alt="Code Editor"
          height={350}
          ref={getImageRef(2)}
          style={{
            position: "absolute",
            top: "-75px",
            zIndex: 999,
            transform: "rotate(180deg)",
          }}
          onLoad={handleImageLoad}
          initial={{
            opacity: 0,
          }}
          animate={
            isLoaded && {
              opacity: 1,
            }
          }
          transition={{ duration: 1, delay: 0 + extraDelay }}
        />

        <motion.img
          draggable={false}
          src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
          alt="Code Editor"
          height={350}
          ref={getImageRef(3)}
          style={{
            position: "absolute",
            bottom: "-35px",
            zIndex: 1001,
          }}
          onLoad={handleImageLoad}
          initial={{
            opacity: 0,
          }}
          animate={
            isLoaded && {
              opacity: 1,
            }
          }
          transition={{ duration: 0.8, delay: 1 + extraDelay }}
        />
        <motion.img
          draggable={false}
          src="https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ"
          alt="Code Editor"
          height={350}
          ref={getImageRef(4)}
          style={{
            position: "absolute",
            bottom: "-35px",
            zIndex: 1001,
          }}
          onLoad={handleImageLoad}
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={
            isLoaded && {
              opacity: 1,
              scale: 1.5,
            }
          }
          transition={{ duration: 1.4, delay: 2.2 + extraDelay }}
        />
        <motion.img
          key="second-card-code-editor"
          draggable={false}
          src="https://utfs.io/f/IJo7F0AX1AKDLLANUQpE1IPvUkeXAxl2Qz60ZimGft4VKFwT"
          alt="Code Editor"
          height={500}
          ref={getImageRef(5)}
          style={{
            position: "absolute",
            zIndex: 1000,
            transform: "rotateX(30deg)",
            willChange: "transform",
          }}
          onLoad={handleImageLoad}
          initial={{
            rotateX: 30,
            opacity: 0,
            filter: "blur(20px)",
            bottom: "40px",
            scale: 1,
          }}
          animate={
            isLoaded && {
              rotateX: 0,
              rotateY: isSecondCardHovered ? -20 : 0,
              x: isSecondCardHovered ? -200 : 0,
              y: isSecondCardHovered ? 50 : 0,
              opacity: 1,
              filter: "blur(0px)",
              scale: isSecondCardHovered ? 1 : 0.76,
              bottom: "-60px",
            }
          }
          transition={{
            type: "spring",
            stiffness: 100,
            mass: hasMounted ? 1 : 2,
            damping: isSecondCardHovered && hasMounted ? 5 : 20,
            duration: isSecondCardHovered ? 0.55 : 2,
            delay: 0 + extraDelay,
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
              ref={getImageRef(5)}
              style={{
                position: "absolute",
                zIndex: 1000,
                transform: "rotateX(30deg)",
                willChange: "transform",
              }}
              onLoad={handleImageLoad}
              initial={{
                rotateX: 30,
                opacity: 0,
                filter: "blur(20px)",
                bottom: "40px",
                scale: 1,
              }}
              animate={
                isLoaded && {
                  rotateX: -2,
                  rotateY: isSecondCardHovered ? -20 : 0,
                  x: isSecondCardHovered ? -200 : 0,
                  y: isSecondCardHovered ? 50 : 0,
                  opacity: 0.4,
                  filter: "blur(10px)",
                  scale: isSecondCardHovered ? 1 : 0.76,
                  bottom: "-60px",
                }
              }
              exit={{
                opacity: 0,
                rotateX: 30,
              }}
              transition={{
                duration: isSecondCardHovered ? 0.55 : 2,
                delay: 0 + extraDelay,
              }}
            />
          )}
        </AnimatePresence>
      </Card>
    </FlexRow>
  );
};

export default CodeEditor;
