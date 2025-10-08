// src/components/home/TestimonialCard.jsx
import React from "react";

const TestimonialCard = ({ name, text }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <p className="text-gray-700 mb-4 italic">“{text}”</p>
      <h4 className="font-semibold">{name}</h4>
    </div>
  );
};

export default TestimonialCard;
