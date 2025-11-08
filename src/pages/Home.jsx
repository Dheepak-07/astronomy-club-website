// src/pages/Home.jsx
import PlanetScene from "../components/PlanetScene";
import ScrollSection from "../components/ScrollSection";

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden overflow-y-scroll">
      <PlanetScene />
      <ScrollSection />
    </div>
  );
}
