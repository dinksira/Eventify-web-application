// src/components/home/EventCard.jsx
import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ title, date, location, image }) => {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />

      {/* Overlay CTA on hover */}
      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-300 transition">
          View Event
        </button>
      </div>

      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{date} • {location}</p>
      </div>
    </motion.div>
  );
};

export default EventCard;
