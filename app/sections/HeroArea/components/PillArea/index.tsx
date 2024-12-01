import { motion } from "framer-motion";
import Pill from "../Pill";
import { useLoadTracker } from "@/app/hooks/useLoadTracker";

const PillArea = () => {
  const { isLoaded, incrementImageCount } = useLoadTracker({ imageCount: 1 });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        perspective: "500px",
        perspectiveOrigin: "45% 30%",
      }}
    >
      <Pill title="React" moveTop={0} moveRight={10} scale={1.8} order={1} />
      <Pill
        title="Next.js"
        moveTop={-60}
        moveRight={210}
        order={2}
        scale={1.4}
      />
      <Pill
        title="TypeScript"
        moveTop={70}
        moveRight={120}
        scale={1.4}
        order={3}
      />
      <Pill title="Framer Motion" moveTop={-130} moveRight={-50} order={4} />
      <Pill
        title="CSS Animations"
        moveTop={-168}
        moveRight={50}
        order={5}
        scale={0.8}
        opacity={0.7}
      />
      <Pill
        title="Redux"
        moveTop={60}
        moveRight={-80}
        order={6}
        scale={0.7}
        opacity={0.6}
      />
      <Pill
        title="PostgreSQL"
        moveTop={-60}
        moveRight={345}
        order={7}
        scale={0.7}
      />
      <Pill
        title="Drizzle ORM"
        moveTop={0}
        moveRight={300}
        order={8}
        scale={0.7}
        opacity={0.7}
      />
      <Pill
        title="Supabase"
        moveTop={-120}
        moveRight={300}
        order={9}
        scale={0.7}
        opacity={0.7}
      />
      <Pill
        title="Redis"
        moveTop={-145}
        moveRight={380}
        order={10}
        scale={0.65}
        opacity={0.6}
      />
      <Pill
        title="React Query"
        moveTop={135}
        moveRight={0}
        order={6}
        scale={0.7}
        opacity={0.7}
      />
      <Pill
        title="Figma & Prototyping"
        moveTop={110}
        moveRight={280}
        order={6}
        scale={0.7}
      />
      <Pill
        title="GraphQL"
        moveTop={105}
        moveRight={-140}
        order={9}
        scale={0.7}
        opacity={0.55}
      />
      <Pill
        title="Node.js"
        moveTop={0}
        moveRight={-180}
        scale={1}
        opacity={0.7}
        order={11}
      />

      <motion.img
        draggable={false}
        src="https://utfs.io/f/IJo7F0AX1AKDVXxCD2gHP29W0tKlODXNkq61JFIewL8courz"
        height={900}
        onLoad={incrementImageCount}
        style={{
          position: "absolute",
          top: -190,
          left: -160,
          zIndex: 1500,
        }}
        initial={{
          opacity: 0,
          transform: "scale(0.4)",
          filter: "blur(20px)",
        }}
        animate={
          isLoaded && {
            opacity: 1,
            transform: "scale(1)",
            filter: "blur(0px)",
          }
        }
        transition={{ duration: 3 }}
      />
    </div>
  );
};

export default PillArea;
