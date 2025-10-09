import React from "react";
import MissionCard from "./MissionCard";
import VisionCard from "./VisionCard";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
        <MissionCard
          icon={<FaBullseye className="text-purple-600" />}
          title="Our Mission"
          description="To make event discovery and organization seamless and inspiring for everyone."
        />
        <VisionCard
          icon={<FaEye className="text-pink-500" />}
          title="Our Vision"
          description="To be the leading platform for unforgettable events across the globe."
        />
      </div>
    </section>
  );
};

export default MissionVisionSection;
