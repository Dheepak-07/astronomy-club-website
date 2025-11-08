import React from "react";
import { motion } from "framer-motion";

export default function TextSection({ id, title, content }) {
  return (
    <motion.section
      id={id}
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-5xl font-bold mb-6">{title}</h2>
      <p className="max-w-3xl text-lg text-gray-300 leading-relaxed">{content}</p>
    </motion.section>
  );
}
