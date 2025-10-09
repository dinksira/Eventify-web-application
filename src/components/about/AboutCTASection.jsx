import React from "react";
import Button from "../common/Button";

const AboutCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Next Event?</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Join Eventify today and experience a seamless way to organize and attend events.
        </p>
        <Button label="Get Started" variant="primary" />
      </div>
    </section>
  );
};

export default AboutCTASection;
