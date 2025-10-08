// src/components/home/HeroSection.jsx
import React from "react";
import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover & Book Events Effortlessly</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Explore corporate conferences, music festivals, weddings, and more — all in one place.
      </p>
      <Button label="Get Started" variant="primary" />
    </section>
  );
};

export default HeroSection;
