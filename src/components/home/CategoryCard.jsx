// src/components/home/CategoryCard.jsx
import React from "react";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
