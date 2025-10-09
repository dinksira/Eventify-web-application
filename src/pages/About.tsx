import React from "react";
import AboutHeroSection from "../components/about/AboutHeroSection";
import CompanyStorySection from "../components/about/CompanyStorySection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import WhyChooseUsSection from "../components/about/WhyChooseUsSection";
import TeamSection from "../components/about/TeamSection";
import AboutCTASection from "../components/about/AboutCTASection";

const About = () => {
  return (
    <div>
      <AboutHeroSection />
      <CompanyStorySection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <TeamSection />
      <AboutCTASection />
    </div>
  );
};

export default About;
