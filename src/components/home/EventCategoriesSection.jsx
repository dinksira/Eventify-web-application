// src/components/home/EventCategoriesSection.jsx
import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  { title: "Corporate", image: "/images/corporate_conference.jpg" },
  { title: "Music Festival", image: "/images/music_festival.jpg" },
  { title: "Weddings", image: "/images/wedding.jpg" },
];


const EventCategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Categories</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Browse our most popular event types and discover experiences tailored for you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} title={cat.title} image={cat.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategoriesSection;