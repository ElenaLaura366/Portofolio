import { motion } from "motion/react";

function Tile() {
  return (
    <motion.div
      whileHover={{
        zIndex: -1,
        backgroundColor: "#27272a)",
      }}
      transition={{
        duration: 5,
        ease: "easeOut",
      }}
      className="aspect-square"
    />
  );
}

export default Tile;
