"use client";

import Card from "@/app/common/Card";
import { CardColor } from "@/app/common/Card";
import FlexRow from "@/app/common/FlexRow";
import PillArea from "./components/PillArea";
import AboutArea from "./components/AboutArea";

const HeroArea = () => {
  return (
    <FlexRow height={390}>
      <Card color={CardColor.DEEP_BLUE} width={40} order={0}>
        <AboutArea />
      </Card>
      <Card color={CardColor.BLANK} width={60} overflow={true} order={1}>
        <PillArea />
      </Card>
    </FlexRow>
  );
};

export default HeroArea;
