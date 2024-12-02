"use client";

import Card from "@/app/common/Card";
import { CardColor } from "@/app/common/Card";
import PillArea from "./components/PillArea";
import AboutArea from "./components/AboutArea";
import FlexRow from "@/app/common/FlexRow";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CareerArea from "./components/CareerArea";

const careerAreaData = [
  {
    title: "LinkedIn",
    description: "Find more detailed descriptions of these roles",
  },
  {
    title: "Senior Software Engineer @ PureCars",
    description:
      "Building a React app ecosystem in the automotive space. Getting hands dirty every step of the way, from planning, design, architecture, to release. Key Areas: High-performance big-data mutation, automating manual processes, accessible power-user features in operational apps, cross-ecosystem design systems, and fluid UI interaction animations.",
  },
  {
    title: "Software Developer @ LocalMed",
    description:
      "Building an app ecosystem for practice operations in the healthcare space. Key Areas: Portable and embeddable scheduling with integrated mapping, data visualization and reporting for practice efficiency.",
  },
  {
    title: "Software Developer @ NewAperio",
    description:
      "Building React apps and Ruby/GraphQL APIs for clients in the healthcare and government sectors. Key Areas: Highly responsive apps, React Native, re-usable bundling architecture for fast-paced projects, performance optimization and server rendering.",
  },
  {
    title: "Software Developer @ Various Internships",
    description:
      "From e-commerce, to game development, to consulting - I had the opportunity to see many different teams and technologies in action at 4 local internships during college.",
  },
];

const portfolioAreaData = [
  {
    title: "Portfolio",
    description:
      "Scroll below to see a collection of detail shots from projects I've designed and developed. There are only a few projects currently included, but more are coming soon!",
  },
];

const HeroArea = () => {
  const [selectedButton, setSelectedButton] = useState<string>("About Me");

  return (
    <FlexRow>
      <Card color={CardColor.DEEP_BLUE} width={40} order={0} height={390}>
        <AboutArea
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
      </Card>
      <Card
        color={CardColor.BLANK}
        width={60}
        overflow={true}
        order={1}
        height={390}
      >
        <AnimatePresence mode="wait">
          {selectedButton === "About Me" && <PillArea key="pill-area" />}
          {selectedButton === "Career" && (
            <CareerArea key="career-area" data={careerAreaData} />
          )}
          {selectedButton === "Portfolio" && (
            <CareerArea key="portfolio-area" data={portfolioAreaData} />
          )}
        </AnimatePresence>
      </Card>
    </FlexRow>
  );
};

export default HeroArea;
