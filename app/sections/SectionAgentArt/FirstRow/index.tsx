import { CardColor } from "@/app/common/Card";
import Card from "@/app/common/Card";
import FlexRow from "@/app/common/FlexRow";
import { useLoadTrackerWithUrls } from "@/app/hooks/useLoadTracker";
import { motion } from "framer-motion";

const FirstRow = () => {
  const HEIGHT_OVERALL = 530;
  const SECONDARY_CARD_HEIGHT = 220;

  const { isLoaded, getImageRef, handleImageLoad } = useLoadTrackerWithUrls({
    urls: [
      "https://utfs.io/f/IJo7F0AX1AKD7fzXVjhBmtfMFuxwUW5R01ovYaby4X6TpJLQ",
      "https://utfs.io/f/IJo7F0AX1AKDAHh9sSBoF4pSKGxn1UTsuePVZgCth5mrQDX8",
      "https://utfs.io/f/IJo7F0AX1AKD5dkHlX0fqLwGPtRU0hAKjd1ry5WXs4HubD8k",
    ],
  });

  return (
    <FlexRow>
      <Card
        color={CardColor.ORANGE}
        width={60}
        order={6}
        height={HEIGHT_OVERALL}
      >
        <motion.img
          draggable={false}
          src="https://utfs.io/f/IJo7F0AX1AKD5dkHlX0fqLwGPtRU0hAKjd1ry5WXs4HubD8k"
          alt="Code Editor"
          ref={getImageRef(2)}
          height={650}
          style={{
            position: "absolute",
          }}
          onLoad={handleImageLoad}
          initial={{
            y: 200,
            opacity: 0,
            rotateX: 30,
            scale: 0.7,
          }}
          animate={
            isLoaded && {
              y: -30,
              x: -20,
              rotateX: 0,
              opacity: 1,
              scale: 0.8,
            }
          }
          transition={{ delay: 3.5, type: "spring", damping: 20, mass: 2 }}
        />
      </Card>
      <Card
        color={CardColor.BLANK}
        width={40}
        order={7}
        height={HEIGHT_OVERALL}
        overflow
        flex="column"
        gap={30}
      >
        <Card
          color={CardColor.ORANGE}
          width={40}
          order={7}
          height={SECONDARY_CARD_HEIGHT}
          fullWidth
        >
          <motion.img
            draggable={false}
            src="https://utfs.io/f/IJo7F0AX1AKDXM1Dd5xWZg1qOBjK93oUQkxirpMhPfuz7TID"
            alt="Code Editor"
            ref={getImageRef(0)}
            height={100}
            style={{
              position: "absolute",
            }}
            onLoad={handleImageLoad}
            initial={{
              y: 200,
              opacity: 0,
              rotateX: 30,
              scale: 0.7,
            }}
            animate={
              isLoaded && {
                y: 55,
                rotateX: 0,
                opacity: 1,
                scale: 1.5,
              }
            }
            transition={{ delay: 3.5, type: "spring", damping: 20, mass: 2 }}
          />
        </Card>
        <Card
          color={CardColor.ORANGE}
          width={40}
          order={7}
          height={HEIGHT_OVERALL - SECONDARY_CARD_HEIGHT - 30}
          fullWidth
        >
          <motion.img
            key="agent-button-group"
            draggable={false}
            src="https://utfs.io/f/IJo7F0AX1AKDAHh9sSBoF4pSKGxn1UTsuePVZgCth5mrQDX8"
            alt="Agent Art colorful button group"
            ref={getImageRef(1)}
            height={325}
            style={{
              position: "absolute",
            }}
            onLoad={handleImageLoad}
            initial={{
              y: 10,
              opacity: 0,
              rotateX: 30,
              scale: 0.3,
            }}
            animate={
              isLoaded && {
                y: 5,
                rotateX: 0,
                opacity: 1,
                scale: 1.15,
              }
            }
            transition={{ delay: 3.5, type: "spring", damping: 20, mass: 2 }}
          />
        </Card>
      </Card>
    </FlexRow>
  );
};

export default FirstRow;
