// src/components/home/CallToActionSection.jsx
import React from "react";
import Button from "../common/Button";

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-purple-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Host or Attend?</h2>
      <p className="mb-6">Join Eventify today and experience seamless event planning.</p>
      <Button label="Join Now" variant="light" />
    </section>
  );
};

export default CallToActionSection;
