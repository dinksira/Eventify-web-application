// src/components/home/EventCard.jsx
import React from "react";

const EventCard = ({ title, date, location, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{date} • {location}</p>
      </div>
    </div>
  );
};

export default EventCard;
