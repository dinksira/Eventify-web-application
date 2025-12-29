"use client";

import React, { Suspense, lazy } from "react";
import { Container } from "@/components/ui/container";

// Lazy load non-critical sections for optimal performance
const HeroSection = lazy(() => import("../components/home/HeroSection"));
const EventCategoriesSection = lazy(() => import("../components/home/EventCategoriesSection"));
const FeaturedEventsSection = lazy(() => import("../components/home/FeaturedEventsSection"));
const TestimonialsSection = lazy(() => import("../components/home/TestimonialsSection"));
const CallToActionSection = lazy(() => import("../components/home/CallToActionSection"));

// Section configuration for easy maintenance and reordering
const SECTIONS = [
  { key: "hero", Component: HeroSection, priority: "high" },
  { key: "categories", Component: EventCategoriesSection, priority: "medium" },
  { key: "featured", Component: FeaturedEventsSection, priority: "medium" },
  { key: "testimonials", Component: TestimonialsSection, priority: "low" },
  { key: "cta", Component: CallToActionSection, priority: "low" },
] as const;

type SectionConfig = typeof SECTIONS[number];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Container className="flex-1 py-0">
        <Suspense 
          fallback={
            <div className="flex flex-col space-y-16 py-16">
              <div className="h-96 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl animate-pulse" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-32">
                {Array(4).fill(0).map((_, i) => (
                  <div key={i} className="h-24 bg-muted/50 rounded-xl animate-pulse" />
                ))}
              </div>
            </div>
          }
        >
          {SECTIONS.map(({ key, Component }) => (
            <Component key={key} />
          ))}
        </Suspense>
      </Container>
    </div>
  );
};

export default Home;
