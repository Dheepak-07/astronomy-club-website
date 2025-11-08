import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fromLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const fromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function About() {
  const isRight = false; // change to true if you want image on the left
  const imageSrc = "/logo.png"; // your image path

  return (
    <motion.section
      id="about"
      className="relative px-6 py-24 overflow-hidden full-page-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
    >
      <motion.div
        className="container mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {/* Text Section */}
        <div
          className={`text-center md:text-left ${
            isRight ? "md:order-2" : "md:order-1"
          }`}
        >
          <motion.h2
            className="text-5xl font-bold mb-6 text-blue-400"
            variants={isRight ? fromRight : fromLeft}
          >
            About Us
          </motion.h2>

          <motion.div
            className="text-lg text-gray-300 leading-relaxed space-y-4"
            variants={isRight ? fromRight : fromLeft}
          >
            <p>
              Welcome to our company! We are dedicated to delivering excellence
              in every project we take on. Our team is driven by passion,
              innovation, and a commitment to making a real difference.
            </p>
            <p>
              From design to development, we believe in creating meaningful
              experiences that inspire and empower our clients.
            </p>
          </motion.div>
        </div>

        {/* Image Section */}
        <div
          className={`flex justify-center items-center w-auto h-auto md:order-2`}
        >
          {imageSrc ? (
            <motion.img
              src={imageSrc}
              alt="About Us Banner"
              className="rounded-auto w-auto h-auto max-h-[500px]"
              variants={isRight ? fromLeft : fromRight}
            />
          ) : (
            <div className="w-full h-[500px] bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">No Image</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}
