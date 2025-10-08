// src/components/home/TestimonialsSection.jsx
import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { name: "Mekdes", text: "Eventify made organizing my event a breeze!" },
  { name: "Abel", text: "Loved the smooth booking experience." },
  { name: "Sara", text: "The UI is clean and easy to use. Highly recommended." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
