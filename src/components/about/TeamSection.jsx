import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const team = [
  { name: "Mekdes T.", role: "CEO", avatar: "/images/users/mekdes.jpg" },
  { name: "Abel K.", role: "Lead Developer", avatar: "/images/users/abel.jpg" },
  { name: "Sara M.", role: "UI/UX Designer", avatar: "/images/users/sara.jpg" },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <TeamMemberCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
