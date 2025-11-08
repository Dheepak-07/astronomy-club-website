import React from "react";
import { motion } from "framer-motion";

// Placeholder images for the gallery
const galleryImages = [
  { src: "https://via.placeholder.com/400x300.png?text=Event+1", alt: "Event 1" },
  { src: "https://via.placeholder.com/400x300.png?text=Observatory", alt: "Observatory" },
  { src: "https://via.placeholder.com/400x300.png?text=Guest+Speaker", alt: "Guest Speaker" },
  { src: "https://via.placeholder.com/400x300.png?text=Nebula", alt: "Nebula" },
];

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function GallerySection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {galleryImages.map((img, index) => (
        <motion.div
          key={index}
          className="w-full h-auto rounded-lg shadow-lg overflow-hidden"
          variants={imageVariants}
        >
          <img src={img.src} alt={img.alt} className="object-cover w-full h-full bg-gray-600" />
        </motion.div>
      ))}
    </div>
  );
}