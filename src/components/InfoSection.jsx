import { motion } from "framer-motion";

export default function InfoSection({ title, text }) {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center px-10 text-left text-gray-200"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-bold text-blue-400 mb-4">{title}</h2>
      <p className="text-xl max-w-3xl leading-relaxed">{text}</p>
    </motion.section>
  );
}
