import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import PlanetScene from "./pages/PlanetScene";
import Navbar from "./components/Navbar";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";

export default function App() {
  return (
    <div className="bg-black text-gray-200">
      {/* Canvas for moon */}
      <PlanetScene />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Page content */}
      <div className="relative z-10">
        <Home />
        <About />
        <div style={{ height: "200vh" }} />
      </div>
    </div>
  );
}
