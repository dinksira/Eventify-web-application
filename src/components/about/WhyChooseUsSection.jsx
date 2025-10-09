import React from "react";
import { FaCalendarAlt, FaBolt, FaUsers } from "react-icons/fa";
import WhyChooseCard from "./WhyChooseCard";

const reasons = [
  {
    icon: <FaCalendarAlt />,
    title: "All-in-One Platform",
    description: "Discover, book, and manage all your events from a single place."
  },
  {
    icon: <FaBolt />,
    title: "Fast & Easy",
    description: "Smooth user experience with modern, responsive design."
  },
  {
    icon: <FaUsers />,
    title: "Trusted by Thousands",
    description: "We’ve helped thousands of users organize successful events."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose Eventify?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, idx) => (
            <WhyChooseCard key={idx} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
