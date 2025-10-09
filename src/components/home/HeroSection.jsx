// src/components/home/HeroSection.jsx
import React from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 text-white">
      {/* Decorative blurred shapes */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] bg-white/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 md:py-28">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover & Book <span className="text-yellow-300">Unforgettable</span> Events
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From corporate conferences to music festivals and weddings — find, explore, and book
            experiences all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button label="Get Started" variant="primary" />
          </motion.div>
        </div>

        {/* Right Illustration / Visual */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.img
            src="/images/illust.jpg"
            alt="Event Illustration"
            className="w-full max-w-md rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
