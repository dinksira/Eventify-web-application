import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ name, text, avatar }) => {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={avatar}
        alt={name}
        className="w-20 h-20 rounded-full mb-4 shadow-md object-cover"
      />
      <p className="text-gray-700 italic mb-4 relative">
        <span className="absolute -left-4 -top-2 text-2xl text-yellow-400">&ldquo;</span>
        {text}
        <span className="absolute -right-4 -bottom-2 text-2xl text-yellow-400">&rdquo;</span>
      </p>
      <h3 className="font-semibold text-gray-900">{name}</h3>
    </motion.div>
  );
};

export default TestimonialCard;
