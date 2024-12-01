"use client";

import Card from "@/app/common/Card";
import { CardColor } from "@/app/common/Card";
import PillArea from "./components/PillArea";
import AboutArea from "./components/AboutArea";
import FlexRow from "@/app/common/FlexRow";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CareerArea from "./components/CareerArea";

const HeroArea = () => {
  const [selectedButton, setSelectedButton] = useState<string>("About Me");

  return (
    <FlexRow height={390}>
      <Card color={CardColor.DEEP_BLUE} width={40} order={0}>
        <AboutArea
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
      </Card>
      <Card color={CardColor.BLANK} width={60} overflow={true} order={1}>
        <AnimatePresence mode="wait">
          {selectedButton === "About Me" && <PillArea key="pill-area" />}
          {selectedButton === "Career" && <CareerArea key="career-area" />}
        </AnimatePresence>
      </Card>
    </FlexRow>
  );
};

export default HeroArea;
