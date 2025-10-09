// src/components/home/CategoryCard.jsx
import React from "react";
import { motion } from "framer-motion";

const CategoryCard = ({ title, image }) => {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">{title}</span>
      </div>

      {/* Title at bottom for fallback */}
      <div className="p-4 text-center md:hidden">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
