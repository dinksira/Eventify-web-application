// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/home/HeroSection";
import EventCategoriesSection from "../components/home/EventCategoriesSection";
import FeaturedEventsSection from "../components/home/FeaturedEventsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CallToActionSection from "../components/home/CallToActionSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <EventCategoriesSection />
      <FeaturedEventsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
