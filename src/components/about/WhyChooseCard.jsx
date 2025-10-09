import React from "react";

const WhyChooseCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
      <div className="text-4xl mb-4 text-purple-600">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WhyChooseCard;
