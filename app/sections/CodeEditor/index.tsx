"use client";

import React from "react";
import Card, { CardColor } from "@/app/common/Card";
import FlexRow from "@/app/common/FlexRow";
import { motion } from "framer-motion";
import { useLoadTracker } from "@/app/hooks/useLoadTracker";

const CodeEditor = () => {
  const { isLoaded, incrementImageCount } = useLoadTracker({ imageCount: 6 });

  return (
    <FlexRow height={390}>
      <Card color={CardColor.DARK} width={40} order={2}>
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
          onLoad={incrementImageCount}
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
          transition={{ duration: 1.4, delay: 2.2 }}
        />
        <motion.img
          draggable={false}
          src="https://utfs.io/f/IJo7F0AX1AKDkEYyz7ACKMU57T2bzdQjH90iAqIhGSJsPDcu"
          height={350}
          onLoad={incrementImageCount}
          style={{
            position: "absolute",
            top: "25px",
            left: "25px",
            zIndex: 999,
          }}
          initial={{
            opacity: 0,
            transform: "scale(0.4) rotateX(30deg) rotateY(20deg)",
            filter: "blur(20px)",
          }}
          animate={
            isLoaded && {
              opacity: 1,
              transform: "scale(1) rotateX(0deg) rotateY(0deg)",
              filter: "blur(0px)",
            }
          }
          transition={{ duration: 2 }}
        />
      </Card>
      <Card color={CardColor.DARK} width={60} order={4}>
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
          onLoad={incrementImageCount}
          initial={{
            opacity: 0,
          }}
          animate={
            isLoaded && {
              opacity: 1,
            }
          }
          transition={{ duration: 1 }}
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
          onLoad={incrementImageCount}
          initial={{
            opacity: 0,
          }}
          animate={
            isLoaded && {
              opacity: 1,
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
          onLoad={incrementImageCount}
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
          transition={{ duration: 1.4, delay: 2.2 }}
        />
        <motion.img
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
          onLoad={incrementImageCount}
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
              opacity: 1,
              filter: "blur(0px)",
              scale: 0.76,
              bottom: "-60px",
            }
          }
          transition={{ duration: 2 }}
        />
      </Card>
    </FlexRow>
  );
};

export default CodeEditor;
