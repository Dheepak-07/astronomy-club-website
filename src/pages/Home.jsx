import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="relative flex flex-col items-start justify-center text-left text-white min-h-screen pl-8 md:pl-16 lg:pl-32 pr-4 py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
    >
      <motion.h1
        className="text-7xl font-bold mb-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        Astronomy Club
      </motion.h1>

      <motion.p
        className="text-2xl text-gray-300 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2 }}
        viewport={{ once: false }}
      >
        Embark on a journey through the cosmos — where curiosity meets the infinite.
      </motion.p>
    </motion.section>
  );
}
