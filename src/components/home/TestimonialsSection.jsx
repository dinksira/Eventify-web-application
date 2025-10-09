import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { name: "Mekdes", text: "Eventify made organizing my event a breeze!", avatar: "/images/mekdes.jpg" },
  { name: "Dink", text: "Loved the smooth booking experience.", avatar: "/images/abel.jpg" },
  { name: "Sara", text: "The UI is clean and easy to use. Highly recommended.", avatar: "/images/sara.jpg" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 via-pink-50 to-red-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Users Say</h2>
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
