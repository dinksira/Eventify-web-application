import React, { Suspense, lazy } from "react";
import { Container } from "@/components/ui/container"; // Assuming you have a layout container

// Lazy load non-critical sections for better performance
const AboutHeroSection = lazy(() => import("../components/about/AboutHeroSection"));
const CompanyStorySection = lazy(() => import("../components/about/CompanyStorySection"));
const MissionVisionSection = lazy(() => import("../components/about/MissionVisionSection"));
const WhyChooseUsSection = lazy(() => import("../components/about/WhyChooseUsSection"));
const TeamSection = lazy(() => import("../components/about/TeamSection"));
const AboutCTASection = lazy(() => import("../components/about/AboutCTASection"));

// Define section order for easy reordering/maintenance
const SECTIONS = [
  AboutHeroSection,
  CompanyStorySection,
  MissionVisionSection,
  WhyChooseUsSection,
  TeamSection,
  AboutCTASection,
] as const;

const About: React.FC = () => {
  return (
    <Container className="min-h-screen py-12 space-y-16">
      <Suspense fallback={<div className="animate-pulse h-64 bg-muted/50 rounded-lg" />}>
        {SECTIONS.map((Section, index) => (
          // Hero renders immediately, others lazy load
          index === 0 ? (
            <Section key="hero" />
          ) : (
            <Section key={`section-${index}`} />
          )
        ))}
      </Suspense>
    </Container>
  );
};

export default About;
