import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center text-white">
      <motion.h1
        className="text-7xl font-bold mb-6"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Astronomy Club
      </motion.h1>

      <motion.p
        className="text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        Embark on a journey through the cosmos — where curiosity meets the infinite.
      </motion.p>
    </section>
  );
}
