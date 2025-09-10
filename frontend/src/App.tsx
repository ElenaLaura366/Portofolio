import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Tile from "./components/Tile";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <main className="w-full relative">
      <section className="w-full grid grid-cols-12 h-screen overflow-y-clip">
        {Array.from(Array(12 * 12), (_, i) => (
          <Tile key={i} />
        ))}
      </section>
      <Hero />
      <Stack />
      <Projects />
      <Contact />
      <SpeedInsights />
    </main>
    /**/
  );
}

export default App;
