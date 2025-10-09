import React from "react";
import { motion } from "framer-motion";

const CompanyStorySection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Our Story
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Eventify began with a simple idea: <span className="font-semibold text-gray-900">event planning should be effortless and inspiring.</span>
            We bridge the gap between people and unforgettable experiences — whether it’s a grand corporate summit or an intimate wedding celebration.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Since our launch, we’ve become a trusted platform for thousands of users nationwide,
            helping them create moments that truly matter.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about-story.jpg"
            alt="Our Story"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStorySection;
