// src/components/home/EventCategoriesSection.jsx
import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  { title: "Corporate", image: "/assets/corporate_conference.jpg" },
  { title: "Music Festival", image: "/assets/music_festival.jpg" },
  { title: "Weddings", image: "/assets/wedding.jpg" },
];

const EventCategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Event Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} title={cat.title} image={cat.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategoriesSection;
