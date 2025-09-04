import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-zinc-950">
      <Hero />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
