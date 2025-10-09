import React from "react";

const TeamMemberCard = ({ avatar, name, role }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
