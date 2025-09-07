import { motion } from "motion/react";

function Tile() {
  const randomLinkGenerator = () => {
    const links = [
      "https://example.com/link1",
      "https://example.com/link2",
      "https://example.com/link3",
    ];
    const randomIndex = Math.floor(Math.random() * links.length);
    const link = document.createElement("a");
    link.href = links[randomIndex];
    link.target = "_blank";
    link.click();
  };
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#27272a)",
      }}
      transition={{
        duration: 5,
        ease: "easeOut",
      }}
      className="aspect-square"
      onClick={randomLinkGenerator}
    />
  );
}

export default Tile;
