import React from "react";
import { motion } from "framer-motion";

const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white py-24 px-6 text-center">
      <div className="container mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-yellow-300">Eventify</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We simplify how people discover, plan, and enjoy unforgettable events.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
