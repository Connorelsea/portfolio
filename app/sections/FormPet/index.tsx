"use client";

import { CardColor } from "@/app/common/Card";
import Card from "@/app/common/Card";
import FlexRow from "@/app/common/FlexRow";
import ImagePreloadWrapper from "@/app/common/ImagePreloadWrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const imagesMap = {
  formWhole:
    "https://42n8qyxrei.ufs.sh/f/IJo7F0AX1AKDhHlpn5ubrHUiIpXxLGWPB71mKgdATN85c69w",
  formWholeNew:
    "https://42n8qyxrei.ufs.sh/f/IJo7F0AX1AKDRACOvFBDHQbyvixh0wzXOq54PT7MLNE8ZJSK",
  formMenu:
    "https://42n8qyxrei.ufs.sh/f/IJo7F0AX1AKD5RpdEw0fqLwGPtRU0hAKjd1ry5WXs4HubD8k",
  formButtonMain:
    "https://42n8qyxrei.ufs.sh/f/IJo7F0AX1AKD3Y1VJsgV2ap6m5fZODSI7iye9wTjWuNEXHgz",
  formButtonSecondary:
    "https://42n8qyxrei.ufs.sh/f/IJo7F0AX1AKDJB6xRJ5kRBXofnedIqkpOJiQarxzZyWASv2b",
  formControls:
    "https://42n8qyxrei.ufs.sh/f/IJo7F0AX1AKDaMHAA5eIRENGl3q1CW96wMTBksYH04FXPp85",
};

const imageUrls = Object.values(imagesMap);

const FormPet = () => {
  const HEIGHT_OVERALL = 530;
  const MIDDLE_CARD_TOP_HEIGHT = 160; // 30% of HEIGHT_OVERALL
  const MIDDLE_CARD_BOTTOM_HEIGHT =
    HEIGHT_OVERALL - MIDDLE_CARD_TOP_HEIGHT - 30; // 70% with gap

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [startAnimations, setStartAnimations] = useState(false);

  // Hover tracking for each card
  const [isFormWholeHovered, setIsFormWholeHovered] = useState(false);
  const [isFormControlsHovered, setIsFormControlsHovered] = useState(false);
  const [isFormButtonMainHovered, setIsFormButtonMainHovered] = useState(false);
  const [isFormMenuHovered, setIsFormMenuHovered] = useState(false);

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
        {/* First column: 35% width, full height */}
        <Card
          color={CardColor.LIGHT_BLUE}
          width={35}
          order={0}
          height={HEIGHT_OVERALL}
          shouldAnimate={true}
          onMouseEnter={() => setIsFormWholeHovered(true)}
          onMouseLeave={() => setIsFormWholeHovered(false)}
        >
          <motion.img
            draggable={false}
            src={imagesMap.formWholeNew}
            alt="FormPet Form Preview"
            height={700}
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
                    y: isFormWholeHovered ? -140 : -130,
                    x: isFormWholeHovered ? -250 : 320,
                    rotateX: isFormWholeHovered ? 35 : 0,
                    opacity: 1,
                    scale: isFormWholeHovered ? 1.2 : 1,
                  }
                : {}
            }
            transition={{
              delay: 0,
              type: "spring",
              damping: isFormWholeHovered ? 50 : 20,
              mass: isFormWholeHovered ? 10 : 2,
            }}
          />
        </Card>

        {/* Second column: 50% width, two vertical cards split 30-70 */}
        <Card
          color={CardColor.BLANK}
          width={50}
          order={1}
          height={HEIGHT_OVERALL}
          overflow
          flex="column"
          gap={30}
          shouldAnimate={true}
        >
          {/* Top card: 30% */}
          <Card
            color={CardColor.LIGHT_BLUE}
            width={50}
            order={0}
            height={MIDDLE_CARD_TOP_HEIGHT}
            fullWidth
            shouldAnimate={true}
            onMouseEnter={() => setIsFormControlsHovered(true)}
            onMouseLeave={() => setIsFormControlsHovered(false)}
          >
            <motion.img
              draggable={false}
              src={imagesMap.formControls}
              alt="FormPet Menu"
              height={200}
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
                      y: isFormControlsHovered ? 0 : -22,
                      rotateX: isFormControlsHovered ? 30 : 0,
                      x: isFormControlsHovered ? 120 : 0,
                      opacity: 1,
                      scale: isFormControlsHovered ? 1.55 : 1,
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

          {/* Bottom card: 70% */}
          <Card
            color={CardColor.LIGHT_BLUE}
            width={50}
            order={1}
            height={MIDDLE_CARD_BOTTOM_HEIGHT}
            fullWidth
            shouldAnimate={true}
            onMouseEnter={() => setIsFormButtonMainHovered(true)}
            onMouseLeave={() => setIsFormButtonMainHovered(false)}
          >
            <motion.img
              draggable={false}
              src={imagesMap.formButtonSecondary}
              alt="FormPet Button"
              height={300}
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
                      y: isFormButtonMainHovered ? -35 : -50,
                      rotateX: 0,
                      opacity: 1,
                      scale: isFormButtonMainHovered ? 1 : 0.8,
                      filter: isFormButtonMainHovered ? "none" : "blur(3px)",
                    }
                  : {}
              }
              transition={{
                delay: 0,
                type: "spring",
                damping: 10,
                mass: 2,
              }}
            />
            <motion.img
              draggable={false}
              src={imagesMap.formButtonMain}
              alt="FormPet Button"
              height={340}
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
                      y: isFormButtonMainHovered ? 140 : 25,
                      rotateX: 0,
                      opacity: 1,
                      scale: isFormButtonMainHovered ? 1.3 : 1,
                      filter: isFormButtonMainHovered ? "blur(5px)" : "none",
                    }
                  : {}
              }
              transition={{
                delay: 0,
                type: "spring",
                damping: 10,
                mass: 2,
              }}
            />
          </Card>
        </Card>

        {/* Third column: 15% width, full height */}
        <Card
          color={CardColor.LIGHT_BLUE}
          width={15}
          order={2}
          height={HEIGHT_OVERALL}
          shouldAnimate={true}
          onMouseEnter={() => setIsFormMenuHovered(true)}
          onMouseLeave={() => setIsFormMenuHovered(false)}
        >
          <motion.img
            draggable={false}
            src={imagesMap.formMenu}
            alt="FormPet Controls"
            height={550}
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
                    y: isFormMenuHovered ? -160 : -20,
                    x: isFormMenuHovered ? 50 : 0,
                    rotateX: isFormMenuHovered ? 30 : 0,
                    opacity: 1,
                    scale: isFormMenuHovered ? 1.5 : 1,
                  }
                : {}
            }
            transition={{
              delay: 0,
              type: "spring",
              damping: isFormMenuHovered ? 12 : 20,
              mass: isFormMenuHovered ? 2 : 2,
            }}
          />
        </Card>
      </FlexRow>
    </ImagePreloadWrapper>
  );
};

export default FormPet;
