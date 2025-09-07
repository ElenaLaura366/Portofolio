import { motion } from "motion/react";

function Tile() {
  const randomLinkGenerator = () => {
    const links = [
      "https://github.com/ElenaLaura366/PalChat",
      "https://github.com/ElenaLaura366/Pizza-delivery-simulator",
      "https://github.com/ElenaLaura366/Tasks-Tracker",
      "https://github.com/ElenaLaura366/MedSAM_App",
      "https://github.com/ElenaLaura366/Noir-Restaurant",
      "https://github.com/ElenaLaura366/Knucklebones-Dice",
      "https://github.com/ElenaLaura366/Game-Of-Life",
      "https://github.com/ElenaLaura366/GithubManager",
      "https://github.com/ElenaLaura366/Dictionary",
      "https://github.com/ElenaLaura366/TIC-TAC-TOE",
      "https://github.com/ElenaLaura366/Multi-Layer-Perceptron",
      "https://github.com/ElenaLaura366/Logistic-Regression",
      "https://github.com/ElenaLaura366/Checkers",
      "https://github.com/ElenaLaura366/Supermarket",
    ];
    const randomIndex = Math.floor(Math.random() * links.length);
    const link = document.createElement("a");
    document.body.appendChild(link);
    console.log(randomIndex);
    link.href = links[randomIndex];
    link.target = "_blank";
    link.click();
    document.body.removeChild(link);
  };
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
      onClick={randomLinkGenerator}
    />
  );
}

export default Tile;
